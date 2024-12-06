import { Request, Response } from 'express'
import { point } from '@turf/helpers';
import readStates from '../functions/readStates';
import Coordinate from '../types/Coord';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import Locality from '../types/Locality';
import getRandomState from '../functions/getRandomState';
import getRandomCoordinateFromState from '../functions/getRandomCoordinateFromState';

class CoordController {
    public async getLocationCoord(req: Request, res: Response): Promise<void> {
        try {
            const { lat, lon } = req.query;
            if (!lat || !lon) {
                res.status(400).json({ error: 'Latitude and longitude are required.' });
                return
            }

            const states = await readStates();
            const coord = point([Number(lon), Number(lat)]);

            for (const state of states.features) {
                if (booleanPointInPolygon(coord, state.geometry)) {
                    const locality: Locality = {
                        state: state.properties.sigla,
                        country: 'Brazil'
                    }
                    res.status(200).json(locality);
                    return
                }
            }
            
            res.status(404).json({ error: 'Location not found' });
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    public async getRandomCoord(req: Request, res: Response) {
        try {
            const { state } = req.query;
            const states = await readStates();

            if (!state) {
                const randomState = getRandomState(states);
                const coordinates = getRandomCoordinateFromState(randomState);
                res.status(200).json(coordinates);
                return
            }

            const stateData = states.features.find((s: any) => s.properties.sigla === state);
            if (!stateData) {
                res.status(404).json({ error: 'State not found' });
                return
            }

            const coordinates = getRandomCoordinateFromState(stateData);
            res.status(200).json(coordinates);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export default CoordController