alert(" Calcular notas das provas");
let nota1 = parseFloat(prompt("Digite a nota da primeira prova: "));
let nota2 = parseFloat(prompt("Digite a nota da segunda prova: "));
let nota3 = parseFloat(prompt("Digite a nota da terceira prova: "));
let media = parseFloat(prompt("Digite a média dos exercícios: "));
let aproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + media) / 7;
if (aproveitamento >= 9) {
    alert("Média= " + aproveitamento + " CONCEITO = A")
}
else if (aproveitamento >= 7.5 && aproveitamento < 9) {
    alert("Média= " + aproveitamento + " CONCEITO = B")
}
else if (aproveitamento >= 6 && aproveitamento < 7.5) {
    alert("Média= " + aproveitamento + " CONCEITO = C")
}
else {
    alert("Média= " + aproveitamento + " CONCEITO = D")
}