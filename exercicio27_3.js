alert(" Eleição para presidente");
let nulo = parseInt(prompt("Digite o número de votos nulos:"));
let branco = parseInt(prompt("Digite o número de votos em branco:"));
let a = parseInt(prompt("Digite o número de votos do candidato A:"));
let b = parseInt(prompt("Digite o número de votos do candidato B:"));
let c = parseInt(prompt("Digite o número de votos do candidato C:"));
let votosValidos = a + b + c;
let totalEleitores = nulo + branco + a + b + c;

console.log("Total de eleitores: " + totalEleitores);
console.log("Percentual de votos validos: " + ((votosValidos / totalEleitores) * 100).toFixed(2) + "%");
console.log("Votos válidos candidato A: "+ ((a / totalEleitores ) * 100).toFixed(2) + "%");
console.log("Votos válidos candidato B: "+ ((b / totalEleitores ) * 100).toFixed(2) + "%");
console.log("Votos válidos candidato C: "+ ((c / totalEleitores ) * 100).toFixed(2) + "%");
console.log("Votos nulos: " + ((nulo / totalEleitores ) * 100).toFixed(2) + "%");
console.log("Votos em branco: " + ((branco / totalEleitores ) * 100).toFixed(2) + "%");
