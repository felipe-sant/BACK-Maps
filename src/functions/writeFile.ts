import { writeFile } from 'fs';
import path from 'path';

function createFile(fileName: string, content: string): void {
    writeFile(path.resolve(__dirname, `../database/${fileName}`), content, (err) => err ? console.log(err) : console.log(`Arquivo "${fileName}" salvo com sucesso!`))
}

export default createFile