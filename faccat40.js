alert("Calcular preço de um produto");
alert("Digite o nome do produto");
let produto = prompt("Nome do produto: ");
let quantidade = parseInt(prompt("Quantidade: "));
let precoUnitario = parseFloat(prompt("Preço unitário: "));
let precoTotal = quantidade * precoUnitario;
if (quantidade <= 5) {
    precoTotal = precoTotal - (precoTotal * 0.02);
}
else if (quantidade > 5 && quantidade <= 10) {
    precoTotal = precoTotal - (precoTotal * 0.03);
}
else {
    precoTotal = precoTotal - (precoTotal * 0.05);
}
alert(" Produto: " + produto + "\n" + "Quantidade: " + quantidade + "\n" + " Valor da compra: R$ " + precoTotal.toFixed(2));