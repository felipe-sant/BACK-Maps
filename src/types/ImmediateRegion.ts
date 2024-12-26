import IntermediateRegion from "./IntermediateRegion"

type ImmediateRegion = {
    id: number,
    nome: string,
    regiao_intermediaria: IntermediateRegion
}

export default ImmediateRegion