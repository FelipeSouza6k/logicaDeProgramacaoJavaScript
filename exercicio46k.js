alert ("CALCULAR ÁREA DE UMA CASA COM BASE NO TAMANHO DOS COMODOS.")
let comodo;
let largura = 0;
let comprimento = 0;
let area = 0;
let totalArea = 0;
while ( comodo != "n" || comodo != "N" || comodo != "nao" || comodo != "Nao" || comodo != "NaO" || comodo != "NÃO"){
comodo = prompt("Nome do comodo: ");
if ( comodo == "n" || comodo == "N" || comodo == "nao" || comodo == "Nao" || comodo == "NaO" || comodo == "NÃO"){
    break;
}
largura = parseFloat(prompt("Largura do comodo em metros "));
comprimento = parseFloat(prompt("Comprimento do comodo em metros "));
area = largura * comprimento;
totalArea += area;
}
alert("A área total da casa é de " + totalArea + " m².");