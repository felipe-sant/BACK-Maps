type UF = {
    id: number;
    sigla: string;
    nome: string;
    região: {
        id: number;
        sigla: string;
        nome: string;
    }
}

export default UF;