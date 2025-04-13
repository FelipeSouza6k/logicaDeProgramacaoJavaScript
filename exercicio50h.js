alert("Calcular área total de uma residência somando com área dos comôdos");
let comodo;
let areaComodo = 0;
let areaTotal = 0;
let largura = 0;
let comprimento = 0;
do {
    comodo = prompt("Digite o nome do cômodo ou 'n' para encerrar:");
    if (comodo != "n") {
        largura = parseFloat(prompt("Digite a largura do cômodo em metros:"));
        comprimento = parseFloat(prompt("Digite o comprimento do cômodo em metros:"));
        areaComodo = largura * comprimento;
        alert("A área do cômodo " + comodo + " é: " + areaComodo + " m².");
        areaTotal += areaComodo;
    }
    else {
        break;
    }
}while (comodo != "n")
alert("A área total da residência é: " + areaTotal + " m².");