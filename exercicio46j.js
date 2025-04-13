alert(" Calculo da soma e da média dos numeros pares na faixa de 50 a 70");
let i = 50;
let soma = 0;
let contador = 0;
while (i <= 70){
    if (i % 2 == 0){
        soma+= i;
    }
    i++;
}
console.log ("A soma dos números pares entre 50 e 70 é: " + soma);
console.log ("A média dos números pares entre 50 e 70 é: " + (soma / 11));