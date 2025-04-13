alert("Fazer média de valores positivos ");
let numero;
let soma = 0;
let media = 0;
let i = 0;
do {
    numero = parseInt(prompt("Digite um número: "));
    if (numero > 0) {
        i++;
        soma += numero;
    }
} while (numero > 0);
media = soma / i;
alert("A média dos números positivos é: " + media);