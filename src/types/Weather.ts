import Locality from "./Locality";

type Weather = {
    temperature: number;
    humidity: number;
    condition: string;
    locality: Locality;
};

export default Weather;