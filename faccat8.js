alert("Ler o total de eleitores, votos brancs, nulos e válidos");
let totalEleitores = parseInt(prompt("Total de eleitores: "));
let votosBrancos = parseInt(prompt("Votos brancos: "));
let votosNulos = parseInt(prompt("Votos Nulos: "));
let votosValidos = parseInt(prompt("Votos válidos: "));

votosBrancos = (votosBrancos / totalEleitores) * 100;
votosNulos = (votosNulos / totalEleitores) * 100;
votosValidos = (votosValidos / totalEleitores) * 100;

alert("A quantidade de eleitores é: " + totalEleitores );
alert("A quantidade de votos brancos é: " + votosBrancos + "%");
alert("A quantidade de votos nulos é: " + votosNulos + "%");
alert("A quantidade de votos válidos é: " + votosValidos + "%");