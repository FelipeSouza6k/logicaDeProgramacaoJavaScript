alert("Calcular tempo de um jogo de Xadrex");
let horaInicial = parseInt(prompt("Horário inicial da partida: "));
let horaFinal = parseInt(prompt("Horário Final da partida: "));
let duracao;
if (horaFinal <= horaInicial) {
    duracao = (24 + horaFinal) - horaInicial;
    alert("A duração desta partida foi de " + duracao + " horas.");
}
else {
    duracao = horaFinal - horaInicial;
    alert("A duração desta partida foi de " + duracao + " horas.");
}
