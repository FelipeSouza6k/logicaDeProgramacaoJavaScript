console.log("Conversão de celsius em fahrenheit de 10 em 10 graus");
let celsius = 0;
let fahrenheit = 0;
for (celsius = 10; celsius <= 100; celsius += 10) {
    fahrenheit = (9 * celsius + 160) / 5
    console.log("" + celsius + "° graus Celsius é igual a " + fahrenheit + "° graus Fahrenheit");
}
