console.log("Fatorial dos números ímpares na faixa de 1 a 10");
let i = 1;
let fatorial = 1;
let num = 0;
let aux = 0;
for (num = 1 ; num < 10; num = num + 2) {
    fatorial = 1;
    for (aux = num; aux > 1; aux--) {
        fatorial *= aux;
    }
    console.log("O fatorial de " + num + " é " + fatorial);
}
