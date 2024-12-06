import fs from 'fs';
import path from "path";

export default async function readStates() {
    const data = await JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/brazil-states.geojson'), 'utf-8'));
    return data;
}