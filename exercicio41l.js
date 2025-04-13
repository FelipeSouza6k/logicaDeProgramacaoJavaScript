alert(" Perguntar nome e sexo da pessoa e apresentar-la");
var nome = prompt("Qual é o seu nome?");
var sexo = prompt("Qual é o seu sexo? (M/F)");
if (sexo == "M" || sexo == "m") {
    alert("Olá Sr. " + nome + ", seja bem-vindo(a)!");
} else if (sexo == "F" || sexo == "f") {
    alert("Olá Sra. " + nome + ", seja bem-vindo(a)!");
} else {
    alert("Sexo inválido!");
}