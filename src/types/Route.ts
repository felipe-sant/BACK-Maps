import Coordinate from "./Coord";

type Route = {
    start: Coordinate; // Ponto inicial da rota
    end: Coordinate; // Ponto final da rota
    waypoints?: Coordinate[]; // Pontos intermediários (opcional)
    distance?: number; // Distância da rota (em km, por exemplo)
    duration?: number; // Duração estimada da rota (em minutos)
};

export default Route;