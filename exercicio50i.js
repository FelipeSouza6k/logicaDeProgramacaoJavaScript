alert("Digite valores inteiros positivos e descubra qual é o maior e o menor deles. Para encerrar, digite um número negativo.");
let numero = 0;
let maior = -1;
let menor = 9999999999999999;
do {
    numero = parseInt(prompt("Digite um número:"));
    if (numero < 0) {
        break;
    }
    else {
        if (numero > maior) {
            maior = numero;
        } else if (numero < menor)
            menor = numero;
    }
} while (numero >= 0)
alert("O maior número digitado foi: " + maior + "\nO menor número digitado foi: " + menor);

