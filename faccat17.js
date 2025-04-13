alert("Calcular notas de um aluno em 2 provas.");
let nota1 = parseFloat(prompt("Digite a nota na primeira prova: "));
let nota2 = parseFloat(prompt("Digite a nota na segunda prova: "));
let media = (nota1 + nota2) / 2;
if (media > 6){
    alert("A média do aluno foi de: "+ media + " . Este aluno foi aprovado");
}
else{
    alert("A média do aluno foi de: "+ media + " . Este aluno foi reprovado");
}
