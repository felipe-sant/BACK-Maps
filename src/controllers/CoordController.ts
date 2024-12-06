import { Request, Response } from 'express'
import { point } from '@turf/helpers';
import readStates from '../functions/readStates';
import Coordinate from '../types/Coord';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import Locality from '../types/Locality';

class CoordController {
    public async getLocationCoord(req: Request, res: Response) {
        try {
            const { lat, lon } = req.query;
            if (!lat || !lon) throw new Error('Latitude and longitude are required.');
            const states = await readStates();
            const coord = point([Number(lon), Number(lat)]);
            for (const state of states.features) {
                if (booleanPointInPolygon(coord, state.geometry)) {
                    const locality: Locality = {
                        state: state.properties.sigla,
                        country: 'Brazil'
                    }
                    res.status(200).json(locality)
                    return
                }
            }
            res.status(200).json({ Error: 'Location not found' })
        } catch (error) {
            console.log(error)
            res.status(400).json({ Error: error })
        }
    }

    public async getRandomCoord(req: Request, res: Response) {
        try {
            const { state } = req.query;
            const states = await readStates();
            if (!state) {
                const randomState = states.features[Math.floor(Math.random() * states.features.length)]
                const point = randomState.geometry.coordinates[0][0][(Math.floor(Math.random() * randomState.geometry.coordinates[0][0].length))]
                const coordinates: Coordinate = {
                    latitude: point[1],
                    longitude: point[0]
                }
                res.status(200).json(coordinates)
            } else {
                const stateData = states.features.find((s: any) => s.properties.sigla === state);
                if (!stateData) throw new Error('State not found');
                const point = stateData.geometry.coordinates[0][0][(Math.floor(Math.random() * stateData.geometry.coordinates[0][0].length))]
                console.log(point)
                const coordinates: Coordinate = {
                    latitude: point[1],
                    longitude: point[0]
                }
                res.status(200).json(coordinates)
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({ Error: error })
        }
    }
}

export default CoordController