alert("Calcular salário de um funcionário se ele fizer hora extra. ");
let salarioHora = parseFloat(prompt("Digite o salário deste funcionário( por hora):"));
let horasTrabalhadas = parseFloat(prompt("Quantidade de horas trabalhadas no mês: "));
let salarioTotal;
let horaExtra;
if (horasTrabalhadas > 160) {
    horaExtra = horasTrabalhadas - 160;
    salarioTotal = (salarioHora * 160) + (horaExtra * (salarioHora * 1.5))
    alert("Salário total é: " + salarioTotal);
}
else {
    salarioTotal = salarioHora * horasTrabalhadas;
    alert("Salário total é: " + salarioTotal);
}