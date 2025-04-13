alert(" Ler valores de base e expoente e calcular a potência. \n\n" );
let base = parseInt(prompt("Digite a base: "));
let expoente = parseInt(prompt("Digite o expoente: "));
let resultado = 1;
let i = 0;
for (i=1; i<= expoente; i++){
    resultado *= base;
}
alert("O resultado de " + base + " elevado a " + expoente + " é: " + resultado);