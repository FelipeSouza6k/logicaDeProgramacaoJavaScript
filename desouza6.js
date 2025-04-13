alert("Calcular média das notas digitadas ");
let notas = 0;
let soma = 0;
let contagem = -1;
let media = 0;
while (notas >= 0 && notas <= 10) {
    soma += notas;
    contagem++;
    notas = parseFloat(prompt("Digite uma nota: "));
}
media = soma / contagem;
alert("A média das notas é: " + media.toFixed(2));