alert("Calcule reajuste do salário de um funcionário");
let salario = parseFloat(prompt("Digite o salário do funcionário:"));
let reajuste = parseFloat(prompt("Digite o valor do reajuste em em porcentagem: (exemplo 0.2 = 20%) "));
let salarioNovo = salario + (salario * reajuste);
alert("O salário reajustado é: " + salarioNovo);
