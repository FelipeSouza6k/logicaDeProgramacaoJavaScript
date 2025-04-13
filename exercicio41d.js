alert("Média do aluno, se não for aprovado irá fazer o exame ");
let nota1 = parseFloat(prompt("Digite a nota do aluno:"));
let nota2 = parseFloat(prompt("Digite a nota do aluno:"));
let nota3 = parseFloat(prompt("Digite a nota do aluno:"));
let nota4 = parseFloat(prompt("Digite a nota do aluno:"));
let exame;
media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media < 7) {
    alert("Necessidade de fazer o exame. ");
    exame = parseFloat(prompt("Digite a nota do exame: "));
    exame = (exame + media) / 2;
    if (exame >= 5) {
        alert("Aluno foi aprovado após o exame (Média com exame tem que ser maior que 5)");
        alert("Média: "+exame.toFixed(2));
    }
    else {
        alert("Aluno foi reprovado no exame (Média com exame tem que ser maior que 5)");
        alert("Média: "+exame.toFixed(2));
    }

}
else {
    alert("Aluno foi aprovado sem necessidade de exame.");
}