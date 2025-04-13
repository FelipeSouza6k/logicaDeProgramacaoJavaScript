alert ("Reajuste de salário");
let SM = parseFloat(prompt("Digite o valor do salário mensal:"));
let PR = parseFloat(prompt("Digite o percentual de reajuste: (em decimal exemplo = 0.10 para 10%)"));
let NS = SM + (SM * PR);
alert("O novo salário é: " + NS.toFixed(2));