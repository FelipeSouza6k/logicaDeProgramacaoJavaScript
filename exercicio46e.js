alert("Calcular base 3 com expoente até 15.");
let expoente = 0;
let resultado = 1;
while (expoente <= 15) {
    resultado *= 3;
    console.log("3^" + expoente + " = " + resultado);
    expoente++;
}