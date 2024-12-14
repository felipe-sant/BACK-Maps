import GeoJson from "../types/GeoJson";

export default class IbgeAPi_malhas {
    public static readonly baseURL = 'https://servicodados.ibge.gov.br/api/v3/malhas/';

    public static async getBrasilStates(): Promise<GeoJson | undefined> {
        try {
            const query = {
                formato: 'application/vnd.geo+json',
                intrarregiao: 'UF'
            }
            const response = await (await fetch(this.baseURL + "paises/BR" + '?' + new URLSearchParams(query))).json() as Promise<GeoJson>;
            return response
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }
}