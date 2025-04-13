alert("Partida de futebol");
let time1 = parseInt(prompt("Digite o número de gols do time 1: "));
let time2 = parseInt(prompt("Digite o número de gols do time 2: "));
if (time1 > time2) {
    alert("Time 1 venceu!");
}
else if (time2 > time1) {
    alert("Time 2 venceu!");
}
else {
    alert("Empate!");
}