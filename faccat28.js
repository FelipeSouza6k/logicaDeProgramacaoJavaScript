alert("Ler 3 valores e falar qual o maior. ");
let num1 = parseFloat(prompt("Digite o primeiro número"));
let num2 = parseFloat(prompt("Digite o segundo número"));
let num3 = parseFloat(prompt("Digite o terceiro número"));

if (num1 > num2 && num1 > num3){
    alert(num1);
}
else if(num2>num1 && num2> num3){
    alert(num2);
}
else{
    alert(num3);
}
