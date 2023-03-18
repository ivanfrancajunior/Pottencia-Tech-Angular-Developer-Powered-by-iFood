// interfaces (type x interfaces ) - o type é mais utilizado quando se quer de fato tipar um objeto e a interface á mais utilizada quando se está trabalhando com classe.

//pra ser mais 'certo, ja que ambos apresentam características bem proximas em caso de definição de uma variavel ou constante recebe seu valores o melhor uso é o do type

type robot = { 
    id: number;
    name: string; 
}

const bot: robot = {
    id: 1,
    name:'cute'
}   

interface robot2{
    id: number;
    name:string
}

const bot2: robot2= {
    id: 2,
    name:'notCute'

}