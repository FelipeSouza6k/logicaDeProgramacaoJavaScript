alert(" Calcular volume da lata de óleo");
let raio = parseFloat(prompt(" Raio da lata de óleo em metros: "));
let altura = parseFloat(prompt("Digite a altura em metros: "));
let volume = Math.PI * raio ** 2 * altura;
alert(" O volume da lata de óleo é: " + volume.toFixed(2) + "m³");