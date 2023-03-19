/*1 - Deverá retornar uma mensagem (string) informando ao usuário o tempo estimado de entrega do restaurante. Por exemplo, para o restaurante Bar do Zinho com o tempo estimado de entrega sendo 20, imprima:

O restaurante Bar do Zinho entrega em 20 minutos.

Desafio Bônus: Utilize interpolação de strings para formatar sua saída ao invés da concatenação de strings tradicional.*/

let nomeRestaurante = gets();
let tempoEstimadoEntrega = parseInt(gets());

function entregaEstimada(nomeRestaurante, tempoEstimadoEntrega) {
    return `O restaurante ${nomeRestaurante} entrega em ${tempoEstimadoEntrega} minutos.`
}
console.log(entregaEstimada(nomeRestaurante, tempoEstimadoEntrega))

/* 2 - A saída deve retornar um texto informando o valor total do pedido e a quantidade de troco que será necessário. Por exemplo, se tivermos os seguintes valores de entrada:

valorHamburguer = 10.00;
quantidadeHamburguer = 2;
valorBebida = 5.00;
quantidadeBebida = 1;
valorPago = 30.00; */

function pedido(valorHamburguer, quantidadeHamburguer, valorBebida, quantidadeBebida, valorPago) {
    let totalHamburguer = valorHamburguer * quantidadeHamburguer; 
    let totalBebida = valorBebida * quantidadeBebida;
    let precoFinal = totalHamburguer + totalBebida;
    let troco =  valorPago -precoFinal

    return `O preço final do pedido é R$ ${precoFinal.toFixed(2)}. Seu troco é R$ ${troco.toFixed(2)}.`      
}
  
console.log(pedido(valorHamburguer, quantidadeHamburguer, valorBebida, quantidadeBebida, valorPago))
/* Deverá retornar uma mensagem (string) que informa se o usuário ganhou uma sobremesa ou não:

Se valorPedido >= 50, a mensagem deve ser:
Parabéns, você ganhou uma sobremesa grátis!
Caso contrário, a mensagem deve ser:
Que pena, você não ganhou nenhum brinde especial */

function surprise(valorPedido) {
   if(valorPedido >= 50) {
      return 'Parabens, você ganhou uma sobremesa gratis!'
    }
    
    if (valorPedido < 50) {
      return 'Que pena, você nao ganhou nenhum brinde especial.'
    }
}
console.log(surprise(valorPedido))

/* O programa deve exibir uma lista de todos os pedidos com suas informações correspondentes, incluindo o nome do prato, se é vegano ou não, e a quantidade de calorias, no seguinte formato:

Pedido X: NOME_DO_PRATO (EH_VEGANO?) - YYY calorias, onde "X" é o número do pedido, "NOME_DO_PRATO" é o nome do prato, "EH_VEGADO?" indica se o prato é vegano (escrever "Vegano" ou "Nao-vegano"), e "YYY" é a quantidade de calorias do prato. */

const numPedidos = parseInt(gets());


for (let i = 1; i <= numPedidos; i++) {
  const prato = gets();
  const calorias = parseInt(gets());


  const ehVegano = gets().toLowerCase() === 's';


  const tipoPrato = ehVegano ? "Vegano" : "Nao-vegano";
  console.log(`Pedido ${i}: ${prato} (${tipoPrato}) - ${calorias} calorias`);
}

/* O programa deve exibir uma única linha contendo o valor total de todos os pedidos com o desconto aplicado, no seguinte formato:

Valor total: XX.YY, onde "XX.YY" é a soma de todos os pedidos com desconto em formato de duas casas decimais após a vírgula. */

function calcularValorTotal(n, pedidos, cupom) {
  let total = 0;
    for (let i = 0; i < n; i++) {
    //Explicação: Aplica o conceito de destructuring para atribuição do nome e valor.
    //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
      let [nome, valor] = pedidos[i].split(' ');
      valor = parseFloat(valor);
      total += valor;
    }
    if (cupom === "10%") {
      total *= 0.9;
    } else if (cupom === "20%") {
      total *= 0.8;
    }
    return total.toFixed(2);
}

const n = parseInt(gets());
const pedidos = [];
for (let i = 0; i < n; i++) {
  pedidos.push(gets());
}
const cupom = gets();
  const valorTotal = calcularValorTotal(n, pedidos, cupom);
  console.log(`Valor total: ${valorTotal}`); 