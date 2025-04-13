alert("Ler o ano de nascimento de uma pessoa e dizer se ela pode votar ou não.");
let ano = parseInt(prompt("Digite o ano de nascimento: "));
idade = 2025 - ano;
if (idade >= 18) {
    alert("Esta pessoa pode votar.");
}
else if (idade == 16 || idade == 17 ) {
    alert("Pode votar, mas não é obrigatório.");
}
else {
    alert("Esta pessoa não pode votar.");
}