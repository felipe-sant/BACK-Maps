import GeoJsonFeature from "./GeoJsonFeature";

type GeoJson = {
    type: string;
    features: Array<GeoJsonFeature>;
}

export default GeoJson;