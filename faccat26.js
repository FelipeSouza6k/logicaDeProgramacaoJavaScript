alert("Calcular quantidade média de um produto no estoque.");
let quantidadeMaxima = parseFloat(prompt("Quantidade máxima do produto no estoque: "));
let quantidadeAtual= parseFloat(prompt("Quantidade atual: "));
let quantidadeMinima = parseFloat(prompt("Quantidade minima: "));
let quantidadeMedia =  (quantidadeMaxima + quantidadeMinima) /2;

if (quantidadeMedia > quantidadeAtual){
    alert("Necessário comprar mais produtos ");
}
else{
    alert("Não é necessário comprar mais produtos");
}
