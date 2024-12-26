import Municipality from "../types/Municipality";
import UF from "../types/UF";
import IbgeAPI from "./IbgeAPI";

export default class IbgeAPI_localidades {
    public static readonly baseURL = IbgeAPI.baseURL + 'v1/localidades/';

    public static async getUFs(): Promise<UF[] | []> {
        try {
            const response = await fetch(this.baseURL + 'estados');
            return await response.json();
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
            const response = await fetch(this.baseURL + `municipios/${id}`);
            return await response.json();
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }
}