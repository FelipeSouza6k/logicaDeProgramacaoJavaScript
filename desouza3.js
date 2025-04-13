alert(" Digite números positivos para fazer a soma: (Caso queira parar, digite um número negativo)");
let numero = 0;
let soma = 0;
while (numero >= 0) {
    soma += numero;
    numero = parseInt(prompt("Digite um número positivo: "));
}
alert("A soma dos números é: " + soma);