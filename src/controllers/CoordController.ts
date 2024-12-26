import { Request, Response } from 'express'
import { point } from '@turf/helpers';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import Locality from '../types/Locality';
import getRandomState from '../functions/getRandomState';
import getRandomCoordinateFromState from '../functions/getRandomCoordinateFromState';
import IbgeAPi_malhas from '../api/IbgeAPI_malhas';
import IbgeAPI_localidades from '../api/IbgeAPI_localidades';
import UF from '../types/UF';

class CoordController {
    public async getLocationCoord(req: Request, res: Response): Promise<void> {
        try {
            const { lat, lon } = req.query;
            if (!lat || !lon) {
                res.status(400).json({ error: 'Latitude and longitude are required.' });
                return
            }

            const states = await IbgeAPi_malhas.getBrasilStates();
            if (!states) {
                res.status(500).json({ error: 'Internal server error' });
                return
            }
            const coord = point([Number(lon), Number(lat)]);

            for (const state of states.features) {
                if (booleanPointInPolygon(coord, state.geometry)) {
                    const stateData: UF | undefined = await IbgeAPI_localidades.getUF(state.properties.codarea)
                    if (!stateData) return
                    const locality: Locality = {
                        state: stateData.nome,
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
            const states = await IbgeAPi_malhas.getBrasilStates();
            if (!states) {
                res.status(500).json({ error: 'Internal server error' });
                return
            }

            if (!state) {
                const randomState = getRandomState(states);
                const coordinates = getRandomCoordinateFromState(randomState);
                res.status(200).json(coordinates);
                return
            }

            const stateData = states.features.find((s: any) => s.properties.codarea === state);
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