import Coordinate from "../types/Coord";

function getRandomCoordinateFromState(stateData: any): Coordinate {
    let points
    if (stateData.geometry.type === 'Polygon') {
        points = stateData.geometry.coordinates[0];
    } else {
        points = stateData.geometry.coordinates[0][0];
    }
    const randomPoint = points[Math.floor(Math.random() * points.length)];
    return { latitude: randomPoint[1], longitude: randomPoint[0] };
}

export default getRandomCoordinateFromState;