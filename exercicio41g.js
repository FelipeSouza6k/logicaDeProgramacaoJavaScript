alert("Efetuar leitura de 4 números inteiros e apresentar os numeros divisíveis por 2 e 3");
let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let num3 = parseFloat(prompt("Digite o terceiro número: "));
let num4 = parseFloat(prompt("Digite o quarto número: "));

if (num1 % 2 == 0 && num1 % 3 == 0) {
    alert(num1 + " é divisível por 2 e 3");
}
else if (num1 % 2 == 0) {
    alert(num1 + " é divisível por 2");
}
else if ( num1 % 3 == 0) {
    alert(num1 + " é divisível por 3");
}
else {
    alert(num1 + " não é divisível por 2 e 3");
}

if (num2 % 2 == 0 && num2 % 3 == 0) {
    alert(num2 + " é divisível por 2 e 3");
}
else if (num2 % 2 == 0) {
    alert(num2 + " é divisível por 2");
}
else if ( num2 % 3 == 0) {
    alert(num2 + " é divisível por 3");
}
else {
    alert(num2 + " não é divisível por 2 e 3");
}

if (num3 % 2 == 0 && num3 % 3 == 0) {
    alert(num3 + " é divisível por 2 e 3");
}
else if (num3 % 2 == 0 ) {
    alert(num3 + " é divisível por 2");
}
else if (num3 % 3 == 0) {
    alert(num3 + " é divisível por 3");
}
else {
    alert(num3 + " não é divisível por 2 e 3");
}
if (num4 % 2 == 0 && num4 % 3 == 0) {
    alert(num4 + " é divisível por 2 e 3");
}
else if (num4 % 2 == 0) {
    alert(num4 + " é divisível por 2");
}
else if (num4 % 3 == 0) {
    alert(num4 + " é divisível por 3");
}
else {
    alert(num4 + " não é divisível por 2 e 3");
}