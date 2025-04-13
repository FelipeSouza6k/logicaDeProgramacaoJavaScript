alert("Ler se número é positivo, negativo ou zero");
let numero = parseInt(prompt("Digite um número: "));
if (numero > 0){
    alert("Número positivo");
}
else if ( numero == 0){
    alert("Este número é zero.");
}
else {
    alert("Número negativo");
}