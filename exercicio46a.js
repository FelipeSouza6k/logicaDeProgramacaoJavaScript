alert("Selecione um número para calcular a tabuada de 1 a 10");
let num = parseInt(prompt("Digite um número: "));
let i = 1;
let resultado = 0;
while (i <= 10) {
    resultado = num * i;
    console.log(num + " x " + i + " = " + resultado);
    i += 1;
}
