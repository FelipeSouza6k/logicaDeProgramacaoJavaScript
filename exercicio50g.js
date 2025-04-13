console.log(" Efetuar cálculo de fatorias ímpares na faixa 1 a 10");
let i = 0;
let fatorial = 1;
let num = 0;
let aux = 0;
do {
    num = 1 + i * 2;
    fatorial = 1;
    aux = num;
    do {
        fatorial *= aux;
        aux--;
    } while (aux != 0);
    console.log("O fatorial de " + num + " é: " + fatorial);
    i ++;
} while (num != 9);