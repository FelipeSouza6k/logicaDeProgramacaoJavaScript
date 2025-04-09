alert("Ver se valor digitado é positivo ou negativo");
let numero = parseFloat(prompt("Digite um número: "));
if (numero > 0){
    alert("Este número é positivo.");
}
else if(numero == 0){
    alert("Este número é neutro.");
}
else{
    alert("Este número é negativo");
}