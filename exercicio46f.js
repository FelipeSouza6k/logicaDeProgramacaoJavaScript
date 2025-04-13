alert("Calcular base qualquer com expoente qualquer.");
let base = parseFloat(prompt("Informe a base: "));
let elevar = parseFloat(prompt("Informe o expoente: "));
let expoente = 1;
let resultado = 1;
while (expoente <= elevar) {
    resultado *= base;
    console.log(base +" ^ " + expoente + " = " + resultado);
    expoente++;
}