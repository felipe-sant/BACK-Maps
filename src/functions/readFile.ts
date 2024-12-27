import fs from 'fs';
import path from "path";

function readFile(fileName: string): any {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../database/${fileName}`), 'utf8'));
    return data;
}

export default readFile