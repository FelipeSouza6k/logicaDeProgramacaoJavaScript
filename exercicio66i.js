console.log("Série fibonacci:")
let i = 0;
let anterior = 1;
let atual = 1;
let proximo = 0;
for (i = 0; i <= 15; i++) {
    proximo = anterior + atual;
    console.log(proximo);
    anterior = atual;
    atual = proximo;
}