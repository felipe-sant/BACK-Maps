type GeoJsonFeature = {
    type: string;
    geometry: {
        type: "MultiPolygon";
        coordinates: number[][][][];
    };
    properties: {
        codarea: string;
    };
}

export default GeoJsonFeature;