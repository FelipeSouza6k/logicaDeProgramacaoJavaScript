alert ("Efetuar calculo de prestação em atraso");
let valor = parseFloat(prompt("Digite o valor da prestação: "));
let tempo = parseInt(prompt("Digite o tempo em meses: "));
let taxa = parseFloat(prompt("Digite a taxa de juros: "));
let prestacao = valor + (valor * taxa / 100) * tempo;
alert("O valor da prestação em atraso é: " + prestacao.toFixed(2) + " reais.");