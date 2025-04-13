alert(" Ler 10 valores numéricos e calcular a média deles ");
let i = 0;
let soma = 0;
let media = 0;
let numero = 0;  
while (i < 10){
    numero = parseInt(prompt("Digite um número: "));
    soma += numero;
    i++;
}
media = soma /10;
console.log("A soma é: " + soma);
console.log("A média é: " + media);