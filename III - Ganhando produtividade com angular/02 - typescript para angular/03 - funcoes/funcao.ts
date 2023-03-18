function sum(x: number, y: number):number {
    
    return x + y
}
console.log(sum(1, 3))

//funções multi tipos

function contant(contato:number | string): number | string{
    return contato
}

// funções assincronas

async function data (id: number): Promise<string>{
 
    return 'Jota';
}