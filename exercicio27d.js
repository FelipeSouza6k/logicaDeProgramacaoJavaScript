alert(" Calcular quantidade de litros de combustivel em uma viagem.");
let tempo = parseFloat(prompt("Tempo gasto na viagem: "));
let velocidade = parseFloat(prompt("Velocidade média: "));
let distancia = tempo * velocidade;
let litrosUsados = distancia / 12;
alert("Velociadade média: " + velocidade + "km/h");
alert("Tempo gasto na viagem: " + tempo + "h");
alert("Distância percorrida: " + distancia + "km");
alert("A quantidade de litros de combustivel gasto na viagem é: " + litrosUsados.toFixed(2) + "L");
