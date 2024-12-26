import GeoJson from "../types/GeoJson";
import UF from "../types/UF";

export default class IbgeAPi_malhas {
    public static readonly baseURL_v3 = 'https://servicodados.ibge.gov.br/api/v3/malhas/';
    public static readonly baseURL_v4 = 'https://servicodados.ibge.gov.br/api/v4/malhas/';

    public static async getBrasilStates(): Promise<GeoJson | undefined> {
        try {
            const query = {
                formato: 'application/vnd.geo+json',
                intrarregiao: 'UF'
            }
            const response = await (await fetch(this.baseURL_v3 + "paises/BR" + '?' + new URLSearchParams(query))).json() as Promise<GeoJson>;
            return response
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }

    public static async getCitysPerUF(id: string): Promise<GeoJson | undefined> {
        try {
            const query = {
                formato: 'application/vnd.geo+json',
                intrarregiao: 'municipio'
            }
            const response = await (await fetch(this.baseURL_v4 + `estados/${id}` + '?' + new URLSearchParams(query))).json() as Promise<GeoJson>;
            return response
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }
}