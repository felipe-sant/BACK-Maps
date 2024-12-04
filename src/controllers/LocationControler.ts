import { Request, Response } from 'express'
import Coordenada from "../types/Coordenada";
import Localidade from '../types/Localidade';
import verificarLocalidade from '../functions/verificarLocalidade';
import getRandomLocation from '../functions/getRandomLocation';

class LocationControler {
    public async getLocations(req: Request, res: Response) {
        const { latitude, longitude } = req.body;
        if (!latitude || !longitude) throw new Error('Latitude e longitude são obrigatórios');
        try {
            const coord: Coordenada = { latitude, longitude }
            const local: Localidade | null = await verificarLocalidade(coord)
            res.status(200).json(local);
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: error });
        }
    }

    public async getRandomLocation(req: Request, res: Response) {
        try {
            const coord: Coordenada = await getRandomLocation()
            res.status(200).json(coord);
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: error });
        }
    }
}

export default new LocationControler();