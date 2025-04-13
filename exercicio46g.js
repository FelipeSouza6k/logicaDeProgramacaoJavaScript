alert("Série de Fibonacci");
let i = 0;
let anterior = 1;
let atual = 1;
let proximo = 0;
while (i <= 15){
    proximo = anterior + atual;
    console.log(proximo);
    anterior = atual;
    atual = proximo;
    i++;
}