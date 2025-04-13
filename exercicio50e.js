alert("Efetuar o calculo dos fatoriais com os 15 valores digitados");
let i = 0;
let fatorial = 1;
let num = 0;
let fatorialTotal = 0;
do {
    num = parseInt(prompt("Digite um número para calcular o fatorial: "));
    fatorial = 1;
    aux = num;
    do {
        fatorial *= aux;
        aux--;
    } while (aux != 0);
    fatorialTotal += fatorial;
    i++;
} while (i < 15);
alert("O somatório dos fatoriais é: " + fatorialTotal);