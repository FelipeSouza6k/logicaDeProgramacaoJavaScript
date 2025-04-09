alert("Calcular media de um aluno nas 3 provas, com pesos de 2,3,5 respectivamente");
let nota1 = parseFloat(prompt("Digite a nota da primeira prova: "));
let nota2= parseFloat(prompt("Digite a nota da segunda prova: "));
let nota3 = parseFloat(prompt("Digite a nota da terceira prova: "));
let media = (nota1 * 2 + nota2 * 3 + nota3 * 5)/10;
alert("A média do aluno é: " + media);