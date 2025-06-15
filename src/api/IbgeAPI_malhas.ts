import GeoJson from "../types/GeoJson";
import IbgeAPI from "./IbgeAPI";
import readFile from "../functions/readFile";
import createFile from "../functions/writeFile";

export default class IbgeAPI_malhas {
    public static readonly baseURL_v3 = IbgeAPI.baseURL + 'v3/malhas/';
    public static readonly baseURL_v4 = IbgeAPI.baseURL + 'v4/malhas/';

    public static async getBrasilStates(): Promise<GeoJson | undefined> {
        try {
            const file = readFile("brazil-df")
            if (file) {
                return file
            } else {
                const query = {
                    formato: 'application/vnd.geo+json',
                    intrarregiao: 'UF',
                    qualidade: 'minima'
                }
                const response = await (await fetch(this.baseURL_v4 + `paises/BR` + '?' + new URLSearchParams(query))).json() as Promise<GeoJson>;
                createFile("brazil-df", JSON.stringify(response))
                return response
            }
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }

    public static async getCitysPerUF(id: string): Promise<GeoJson | undefined> {
        try {
            const query = {
                formato: 'application/vnd.geo+json',
                intrarregiao: 'municipio',
                qualidade: 'minima'
            }
            const response = await (await fetch(this.baseURL_v4 + `estados/${id}` + '?' + new URLSearchParams(query))).json() as Promise<GeoJson>;
            return response
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }
}