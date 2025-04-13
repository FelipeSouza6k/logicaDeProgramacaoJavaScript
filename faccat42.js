alert(" Verificar se o funcionário pode se aposentar ou não");
let codigo = parseInt(prompt("Digite o código do funcionário: "));
let ano = 2025;
let nascimento = parseInt(prompt("Digite o ano de nascimento do funcionário: "));
let idade = ano - nascimento;
let ingresso = parseInt(prompt("Digite o ano de ingresso do funcionário: "));
let tempo = ano - ingresso;

if (idade >= 65 || tempo >= 30 || (tempo >= 25 && idade >= 60)) {
    alert(+ idade + " anos de idade; " + tempo + " anos de contribuição; \n Requer aposentadoria .");
}
else {
    alert(+ idade + " anos de idade; " + tempo + " anos de contribuição; \n Não requer aposentadoria .");
}