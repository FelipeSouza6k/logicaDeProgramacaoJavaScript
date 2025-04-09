alert("Calcular salário do funcionário com comissão por cada carro vendido");
let salarioFixo = parseFloat(prompt("Salário do funcionário: "));
let comissao = parseFloat(prompt("Comissão fixa do funcionário 'por carro vendido': "));
let totalVendas = parseFloat(prompt("Vendas totais: "));
let carros = parseFloat(prompt("Quantidade de carros vendidos : "));
comissao = comissao * carros;
totalVendas= totalVendas * 0.05;
let salarioTotal= salarioFixo + comissao + totalVendas;
alert("Salário Total é = "+salarioTotal+"R$");

