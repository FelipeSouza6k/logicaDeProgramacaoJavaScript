alert("Digite uma senha até acertar a correta ");
let senha = parseInt(prompt("Digite uma senha: (senha contém 4 dígitos)"));
let senhaSecreta = 1234;

while (senha != senhaSecreta) {
    senha = parseInt(prompt("Digite uma senha: (senha contém 4 dígitos)"));
}
if (senha == senhaSecreta) {
    alert("Senha correta ! ");
}
