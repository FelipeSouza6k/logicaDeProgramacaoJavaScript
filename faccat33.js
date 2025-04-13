alert("Ler 3 numeros ");
let num1 = parseFloat(prompt("Digite o primeiro número"));
let num2 = parseFloat(prompt("Digite o segundo número"));
if (num1 == num2){
    alert("Os números são iguais!");
}
else if (num1 > num2) {
    alert("Primeiro número é maior");
}
else{
    alert("Segundo número é maior");
}