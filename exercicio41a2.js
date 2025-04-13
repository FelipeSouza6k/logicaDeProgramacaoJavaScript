alert("Diferença do maior pelo menor com numeros iguais");
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
if (num1 > num2) {
    alert("A diferença entre " + num1 + " e " + num2 + " é: " + (num1 - num2));
}
else if (num1 == num2) {
    alert("Não há diferença entre os números pois " + num1 + " é = " + num2);
}
else {
    alert("A diferença entre " + num2 + " e " + num1 + " é: " + (num2 - num1));
}