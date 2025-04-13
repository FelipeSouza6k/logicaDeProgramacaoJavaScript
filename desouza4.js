alert("Fazer tabuada de um número");
let numero = parseInt(prompt("Digite um número para fazer a tabuada"));
let contagem = 1;
while(contagem < 11){
    console.log(numero + " X " + contagem + " = " + (numero * contagem));
    contagem++;
}
