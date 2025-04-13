alert("Calcular média escolar do aluno");
let nota = parseFloat(prompt(" Digite o valor da nota:"));
let nota1 = parseFloat(prompt(" Digite o valor da nota:"));
let nota2 = parseFloat(prompt(" Digite o valor da nota:"));
let nota3 = parseFloat(prompt(" Digite o valor da nota:"));
let media = (nota + nota1 + nota2 + nota3) / 4;
if (media >= 5) {
    alert("O aluno foi aprovado =)");
    alert("Media: " + media);
}
else {
    alert("O aluno foi reprovado ");
    alert("Media: " + media);
}