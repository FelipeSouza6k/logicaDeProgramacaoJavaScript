alert(" fazer uma divisão sem sinal de divisão entre dois números ");
let dividendo = parseFloat(prompt("Digite o dividendo:"));
let divisor = parseFloat(prompt("Digite o divisor:"));
let quociente = 1;
let j = divisor;
if (divisor > dividendo) {
    alert("Não foi possível fazer a divisão, pois o divisor é maior que o dividendo.");
}
else if(divisor == 0) {
    alert("Não foi possível fazer a divisão, pois o divisor é igual a zero.");
}
else if (dividendo == 0) {
    alert("Não foi possível fazer a divisão, pois o dividendo é igual a zero.");
}
else if (dividendo == divisor) {
    alert("O resultado da divisão é 1, pois o dividendo e o divisor são iguais.");
}
do {
    divisor += j;
    quociente++;
} while (divisor != dividendo)

if (divisor > dividendo) {
    alert("Não foi possível fazer a divisão, pois o resultado não é inteiro.");
}

alert("O resultado da divisão : " + dividendo + " / " + j + " é = " + quociente);  