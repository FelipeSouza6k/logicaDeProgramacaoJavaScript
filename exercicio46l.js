alert("Ler valores positivos e apresentar o maior e o menor deles.");
let numero = 0;
let maior = -9999999999999999999999999;
let menor = 9999999999999999999999999;
while (numero >= 0) {
    numero = parseFloat(prompt("Digite um número positivo:"));
    if(numero > 0){
        if (numero > maior){
            maior = numero;
        }
    }
    if (numero > 0){
        if (numero < menor){
            menor = numero;
        }
    }
}
alert("O maior número digitado foi: " + maior);
alert("O menor número digitado foi: " + menor);