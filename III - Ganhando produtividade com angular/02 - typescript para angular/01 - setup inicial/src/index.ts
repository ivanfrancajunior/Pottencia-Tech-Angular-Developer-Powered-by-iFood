console.log('Oi!')

type heroi = {
    nome: string;
    vulgo: string;      
}

function printaObjeto(pessoa: heroi) {
    console.log(pessoa);
}
printaObjeto({
    nome: 'Thor',
    vulgo:'o cara com o martelo'
})