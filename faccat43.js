// Início
let a = parseFloat(prompt("Digite o valor de A:"));
let b = parseFloat(prompt("Digite o valor de B:"));
let c = parseFloat(prompt("Digite o valor de C:"));
let mens;

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        mens = "Triângulo Equilátero";

    } else if (a === b || b === c || a === c) {

        mens = "Triângulo Isósceles";
    } else {

        mens = "Triângulo Escaleno";
    }
} else {

    mens = "Não é possível formar um triângulo";
}

alert(mens);

// A=1, B=2, C=3 => Não é possível formar um triângulo
// A=3, B=4, C=5 => Triângulo Escaleno
// A=2, B=2, C=4 => Não é possível formar um triângulo
// A=4  ,B=4, C=4 => Triângulo Equilátero
// A=5 ,B=3, C=3 => Triângulo Isósceles 