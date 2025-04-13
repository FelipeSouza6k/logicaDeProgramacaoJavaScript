alert(" Fazer calculo com os 4 valores digitados, somando e multiplicando os valores digitados. \n\n");
let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let valor3 = parseFloat(prompt("Digite o terceiro valor:"));
let valor4 = parseFloat(prompt("Digite o quarto valor:"));

console.log("A + B = " + (valor1 + valor2) + "\n" + "A + C = " + (valor1 + valor3) + "\n" + "A + D = " + (valor1 + valor4) + "\n" + "B + C = " + + (valor2 + valor3) + "\n" + "B + D = " + (valor2 + valor4) + "\n" + "C + D = " + (valor3 + valor4));

console.log("A * B = " + (valor1 * valor2) + "\n" + "A * C = " + (valor1 * valor3) + "\n" + "A * D = " + (valor1 * valor4) + "\n" + "B * C = " + (valor2 * valor3) + "\n" + "B * D = " + (valor2 * valor4) + "\n" + "C * D = " + (valor3 * valor4));