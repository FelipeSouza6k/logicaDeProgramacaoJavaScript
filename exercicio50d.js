console.log("Somatório de números de grãos de trigo");
let i = 0;
let somaTrigo = 1;
do {
    i++;
    somaTrigo *= 2;

} while (i < 64);
somaTrigo -= 1; 
console.log("Total de grãos na casa 64° : " + somaTrigo);