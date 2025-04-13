alert("Ler 3 valores representando medidas do triângulo");
let lado1 = parseFloat(prompt("Digite o primeiro lado"));
let lado2 = parseFloat(prompt("Digite o segundo lado"));
let lado3 = parseFloat(prompt("Digite o terceiro lado"));
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    alert("As medidas formam um triângulo.");
} else {
    alert("As medidas não formam um triângulo.");
}