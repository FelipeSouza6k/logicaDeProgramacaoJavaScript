alert("Calcular slário de um funcionario com comissão com base em suas vendas");
let salario = parseFloat(prompt("Digite o salário do funcionário: "));
let totalVendas = parseFloat(prompt("Digite o total de vendas: "));
let comissao;
if (totalVendas > 1500) {
    comissao = totalVendas * 0.05;
    salario = salario + comissao;
    alert("O salário deste funcionário com comissão é: " + salario + "R$");
}
else {
    comissao = totalVendas * 0.03;
    salario = salario + comissao;
    alert("O salário deste funcionário com comissão é: " + salario + "R$");
}
