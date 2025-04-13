alert(" Calcular idade de dois homens e duas mulheres e fazer cálculos.");
let homem1 = parseInt(prompt("Digite a idade do primeiro homem: "));
let homem2 = parseInt(prompt("Digite a idade do segundo homem: "));
let mulher1 = parseInt(prompt("Digite a idade da primeira mulher: "));
let mulher2 = parseInt(prompt("Digite a idade da segunda mulher: "));
let produto, soma;
if (homem1 > homem2 && mulher1 > mulher2) {
    produto = homem1 * mulher1;
    soma = homem2 + mulher2;
    alert("Produto do homem mais velho com mulher mais velha: " + produto + "\nSoma da idade do homem mais novo com a mulher mais nova: " + soma);
} 
else if(homem2 >homem1 && mulher1 > mulher2){
    produto = homem2 * mulher1;
    soma = homem1 + mulher2;
    alert("Produto do homem mais velho com mulher mais velha: " + produto + "\nSoma da idade do homem mais novo com a mulher mais nova: " + soma);
} 
else if(homem1 > homem2 && mulher2 > mulher1){
    produto = homem1 * mulher2;
    soma = homem2 + mulher1;
    alert("Produto do homem mais velho com mulher mais velha: " + produto + "\nSoma da idade do homem mais novo com a mulher mais nova: " + soma);
} 
else if(homem2 > homem1 && mulher2 > mulher1){
    produto = homem2 * mulher2;
    soma = homem1 + mulher1;
    alert("Produto do homem mais velho com mulher mais velha: " + produto + "\nSoma da idade do homem mais novo com a mulher mais nova: " + soma);
} 
else{
    alert("Idades inválidas!");
}