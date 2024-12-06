import Coordinate from "./Coord";
import Locality from "./Locality";

type FullLocation = {
    locality: Locality;
    coordinate?: Coordinate;
};

export default FullLocation;
