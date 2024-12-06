import fs from 'fs';
import path from 'path';

export default async function readStates() {
    try {
        const filePath = path.resolve(__dirname, '../data/brazil-states.geojson');
        const data = await fs.promises.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Erro ao ler ou processar o arquivo:", error);
        throw new Error('Não foi possível ler os estados.');
    }
}
