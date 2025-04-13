alert("Ler um valor e apresentar-lo caso não seja maior que 3");
let num = parseFloat(prompt("Digite um número: "));
if (num <= 3) {
    alert(num);
}
else{
    alert("Número maior que 3, não será apresentado.");
}