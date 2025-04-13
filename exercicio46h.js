alert(" Calcular celsius para farenheit aumentando celsius em 10 graus");
let celsius = 10;
let farenheit = 0;
while (celsius <= 100) {
    farenheit = (9 * celsius + 160) / 5;
    console.log(celsius + "Celsius " + farenheit + " Farenheit ");
    celsius += 10;
}
