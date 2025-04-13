alert("Calcular fatorial de um número");
let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
let resultado = 0;
let aux = numero;
let fatorial = 1;
while (aux > 1) {
    fatorial *= aux;
    aux--;

}
console.log("Resultado de " + numero + "! é: " + fatorial);