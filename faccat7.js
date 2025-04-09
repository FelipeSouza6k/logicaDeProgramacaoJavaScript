alert("Calcular a idade da pessoa de anos, meses e dias para apensas dias.");
let ano = parseInt(prompt("Digite quantos anos a pessoa já viveu: "));
ano = ano * 365;
let meses = parseInt(prompt("Quantos meses desde o ultimo aniversário da pessoa:"));
meses = meses * 30;
let dias = parseInt(prompt("Tempo desde o último mesversario da pessoa: "));
let totalDias = ano + meses + dias;
alert("A pessoa já viveu: " + totalDias + " dias");
