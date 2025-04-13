alert("Calculo preço de morango e maçã.");
let morango = parseFloat(prompt("Digite o peso da compra do morango: "));
let maca = parseFloat(prompt("Digite o peso da compra da maçã: "));
let precoMaca, precoMorango, valorTotal, pesoTotal;
let peso = morango + maca;
if (morango < 5) {
    precoMorango = morango * 2.50;
}
else {
    precoMorango = morango * 2.20;
}

if (maca < 5) {
    precoMaca = maca * 1.80;
}
else {
    precoMaca = maca * 1.50;
}
valorTotal = precoMorango + precoMaca;
pesoTotal = morango + maca;
if (pesoTotal > 8 || valorTotal > 25) {
    valorTotal = valorTotal - (valorTotal * 0.10);
}
    alert("Peso de morangos comprados: " + morango + " kg\n Peso de maçãs compradas: "+ maca +" kg ");
    alert("Valor total com desconto: R$ " + valorTotal.toFixed(2));
