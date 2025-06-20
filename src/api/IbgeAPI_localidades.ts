import readFile from "../functions/readFile";
import createFile from "../functions/writeFile";
import Municipality from "../types/Municipality";
import UF from "../types/UF";
import IbgeAPI from "./IbgeAPI";

export default class IbgeAPI_localidades {
    public static readonly baseURL = IbgeAPI.baseURL + 'v1/localidades/';

    public static async getUFs(): Promise<UF[] | []> {
        try {
            const response = readFile('ufs.json') as UF[]
            return response
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    public static async getUF(id: string): Promise<UF | undefined> {
        try {
            const response = await fetch(this.baseURL + `estados/${id}`);
            return await response.json();
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }

    public static async getCity(id: string): Promise<Municipality | undefined> {
        try {
            const file = readFile(`${id}-info.json`)
            if (file) {
                return file
            } else {
                const response = await (await fetch(this.baseURL + `municipios/${id}`)).json()
                createFile(`${id}-info.json`, JSON.stringify(response))
                return response;
            }
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }
}