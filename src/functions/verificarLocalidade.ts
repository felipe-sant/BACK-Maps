import Coordenada from "../types/Coordenada";
import Localidade from "../types/Localidade";
import { point } from '@turf/helpers';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import fs from 'fs';
import path from "path";

async function verificarLocalidade(coord: Coordenada): Promise<Localidade | null> {
    const estados = await JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/brazil-states.geojson'), 'utf-8'));
    const ponto = point([coord.longitude, coord.latitude]);
    for (const estado of estados.features) {
        if (booleanPointInPolygon(ponto, estado.geometry)) {
            return {
                estado: estado.properties.sigla,
                pais: 'Brasil'
            }
        }
    }
    return null
}

export default verificarLocalidade