import promptSync from "prompt-sync";

export default class Entrada {
    public receberNumero(mensagem: string): number {
        let prompt = promptSync();
        let valor = prompt(`${mensagem} `)
        let numero = new Number(valor)
        if (Number.isNaN(numero.valueOf())) throw new TypeError("Não é um número")
        return numero.valueOf()
    }
    public receberTexto(mensagem: string): string {
        let prompt = promptSync();
        let texto = prompt(`${mensagem} `)
        return texto
    }
    public receberData(mensagem: string): Date {
        let prompt = promptSync();
        let texto = prompt(`${mensagem}, no padrão dd/MM/yyyy: `)
        let partes = texto.split('/')
        let ano = new Number(partes[2])
        let mes = new Number(partes[1])
        let dia = new Number(partes[0])
        let data = new Date(ano.valueOf(), mes.valueOf() - 1, dia.valueOf())
        if (data.toString() === "Invalid Date") throw new TypeError("Data inválida")
        return data
    }
    public aguardarEnter(): void {
        let prompt = promptSync();
        prompt('Pressione ENTER para continuar...')
    }
}

// Path: src/io/Saida.ts