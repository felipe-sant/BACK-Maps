import verificarLocalidade from "./functions/verificarLocalidade";
import Coordenada from "./types/Coordenada";
import Localidade from "./types/Localidade";

console.clear()

const coord: Coordenada = { longitude: -55, latitude: -13 };
console.log(coord)

const localidade: Localidade | null = verificarLocalidade(coord);
console.log(localidade);
