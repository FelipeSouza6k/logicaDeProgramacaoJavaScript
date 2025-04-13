alert("Adivinhar o número secreto");
let secreto = 5;
let tentativas = 0;
let numero = 0;
while (numero != secreto) {
    tentativas++;
    numero = parseFloat(prompt("Digite um número entre 1 e 10"));
    if (numero == secreto) {
        alert("Você acertou o número secreto em " + tentativas + " tentativas!");
    }
}
