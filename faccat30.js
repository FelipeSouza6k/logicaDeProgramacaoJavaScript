alert("Ler 3 valores e falar qual o maior. ");
let num1 = parseFloat(prompt("Digite o primeiro número"));
let num2 = parseFloat(prompt("Digite o segundo número"));
let num3 = parseFloat(prompt("Digite o terceiro número"));
let maior;
let menor;
let meio;

if (num1 > num2 && num1 > num3) {
    maior = num1;
    if (num2 > num3) {
        meio = num2;
        menor = num3;
        alert(menor + " " + meio + " " + maior);
    } else {
        meio = num3;
        menor = num2;
        alert(menor + " " + meio + " " + maior);
    }
}
else if (num2 > num1 && num2 > num3) {
    maior = num2;
    if (num1 > num3) {
        meio = num1;
        menor = num3;
        alert(menor + " " + meio + " " + maior);
    } else {
        meio = num3;
        menor = num1;
        alert(menor + " " + meio + " " + maior);
    }
}
else {
    maior = num3;
    if (num1 > num2) {
        meio = num1;
        menor = num2;
        alert(menor + " " + meio + " " + maior);
    } else {
        meio = num2;
        menor = num1;
        alert(menor + " " + meio + " " + maior);
    }
}