console.log("Somatório dos numeros pares na faixa de 1 a 500");
let i = 0;
let soma = 0;
for (i = 1; i <= 500; i++) {
    if (i % 2 == 0) {
        soma += i;
    }
}
console.log("A soma dos números pares na faixa de 1 a 500 é: " + soma);