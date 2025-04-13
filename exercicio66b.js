alert("Calcular número tabuada de um número entre 1 e 10");
let numero = parseInt(prompt("Digite um número: "));
let i = 0;
let resultado = 0;
for (i = 1; i <= 10; i++) {
    if (numero < 1 || numero > 10) {
        alert("Número inválido. Digite um número entre 1 e 10.");
        numero = parseInt(prompt("Digite um número: "));
        i = 0;
    }
    else {
        resultado = numero * i;
        console.log("O resultado de " + numero + " x " + i + " é: " + resultado);
    }
}