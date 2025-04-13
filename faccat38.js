alert("Confirmar código e senha");
let codigo = prompt("Digite o código: ");
let senha;
let codigoCorreto = "1234";
let senhaCorreta = "9999";
if (codigo == codigoCorreto) {
    alert("Usúario Válido! ");
    senha = prompt("Digite a senha: ");
    if (senha == senhaCorreta) {
        alert("Acesso permitido!");
    }
    else {
        alert("Senha Incorreta!");
    }
}
else{
    alert("Código Incorreto!");
}