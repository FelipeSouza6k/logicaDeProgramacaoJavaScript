alert("Posto de combustível");
let tipoCombustivel = prompt("Digite o tipo de combustível (A - Álcool ou G - Gasolina): ");
let litros = parseFloat(prompt("Digite a quantidade de litros: "));
let valorPorLitro;
let valorTotal;
if (tipoCombustivel == "A" || tipoCombustivel == "a") {
    valorPorLitro = 2.90;
    if (litros <= 20) {
       valorTotal = litros * valorPorLitro * 0.97;
       alert("Valor total a pagar: R$ " + valorTotal.toFixed(2));
    }
       else if (litros > 20) {
        valorTotal = litros * valorPorLitro * 0.95;
        alert("Valor total a pagar: R$ " + valorTotal.toFixed(2));
    }
}
else if (tipoCombustivel == "G" || tipoCombustivel == "g") {
    valorPorLitro = 3.30;
    if(litros <= 20) {
        valorTotal = litros * valorPorLitro * 0.96;
        alert("Valor total a pagar: R$ " + valorTotal.toFixed(2));
    }
    else if (litros > 20) {
        valorTotal = litros * valorPorLitro * 0.94;
        alert("Valor total a pagar: R$ " + valorTotal.toFixed(2));
    }
}
else {
    alert("Tipo de combustível inválido!");
}