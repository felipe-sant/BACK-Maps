import Coordenada from "../types/Coordenada";
import fs from 'fs';
import path from "path";

async function getRandomLocation(): Promise<Coordenada> {
    const estados = await JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/brazil-states.geojson'), 'utf-8'));
    const ponto = estados.features[Math.floor(Math.random() * estados.features.length)].geometry.coordinates[0][0][0];
    return {
        latitude: ponto[1],
        longitude: ponto[0]
    }
}

export default getRandomLocation