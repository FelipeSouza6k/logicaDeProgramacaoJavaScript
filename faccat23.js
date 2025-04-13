// O ERRO DESTE CÓDIGO É A VARIÁVEL NOME, POIS TEM QUE SER A VARIÁVEL ALTURA
let altura = parseFloat(prompt("Digite sua altura: "));
let sexo = prompt("Digite o seu sexo: ");
let pesoIdeal;
if (sexo = "m" || "M") {
    pesoIdeal = (72.7 * altura) - 58;
}
else {
    pesoIdeal = (62.1 * altura) - 44.7;
}
alert(pesoIdeal.toFixed(2));