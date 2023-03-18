//tipos primitivos boolean,number, string
let smart:boolean = true
let age:number = 29
let nome: string = "Jota"

// Sobre inferência: Deixa implicito o tipo da variavel a partir da sua declaração, a tipagem ali nos exemplos é otalmente desnecessária 👍🏾

//tipos especiais null e undefined
let nulo: null = null
let indefinido:undefined = undefined


//tipos abrangentes: any void
let vazio:void
let retornoView: any = true // pode retornar qualquer coisa

//Objeto - sem previsibilidade.
let produto: object = {
    nome: 'Algo',
    preco: 1,
    quantidade:1
};
// Objeto tipado - com previsibilidade.
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProdudo: ProdutoLoja = {
    nome: 'Produto Tipado',
    preco: 1,
    unidades: 1
} 
 
// Arrays

let dados: string[] = ['dado1', 'dado2', 'dado3']
let dados2: Array<string> = ['dado1','dado2','dado3'] 




