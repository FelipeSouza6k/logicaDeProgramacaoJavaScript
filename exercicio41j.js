alert(" ler valor e dizer se esta na faixa de 1 a 9");
let num = parseFloat(prompt("Digite um número: "));

if (num >= 1 && num <= 9) {
    alert(num+ " Está na faixa permitida");
}
else{
    alert(num+ " Não está na faixa permitida");
}