import fs from 'fs';
import path from "path";

function readFile(fileName: string): any {
    try {
        const file = fs.readFileSync(path.resolve(__dirname, `../database/${fileName}`), 'utf8')
        return JSON.parse(file);
    } catch (error) {
        return
    }
}

export default readFile