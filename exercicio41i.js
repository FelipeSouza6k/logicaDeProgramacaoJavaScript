alert("Ler número digitado e falar se ele é par ou ímpar");
let num = parseFloat(prompt("Digite um número: "));

if (num % 2 == 0) {
    alert(num + " é par");
}
else {
    alert(num + " é ímpar");
}