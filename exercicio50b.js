alert(" Somatório dos números pares na faixa de 1 a 500 ");
let soma = 0;
let i = 1;
do {
    if (i % 2 == 0) {
        soma += i;
    }
    i++;
} while (i <= 500);
alert("A soma dos números pares de 1 a 500 é: " + soma);