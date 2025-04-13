let x = parseFloat(prompt("Digite um número"));
let y = parseFloat(prompt("Digite outro número"));
let z = x * y;
let resposta;
if (z <= 0) {
    resposta = ("A");
}
else if (z <= 100) {
    resposta = ("B");
}
else {
    resposta = ("C");
}
alert(z + "" + resposta);

//Z=6    RESPOSTA = B
//Z=450  RESPOSTA = C
//Z=-7   RESPOSTA = A
//Z=-10  RESPOSTA = A
//Z= 150 RESPOSTA = C