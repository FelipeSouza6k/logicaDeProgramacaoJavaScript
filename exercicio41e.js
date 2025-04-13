alert("Esse programa calcula as raízes de uma equação do segundo grau.");
let a = parseFloat(prompt("Digite o valor de a: "));
let b = parseFloat(prompt("Digite o valor de b: "));
let c = parseFloat(prompt("Digite o valor de c: "));
let delta = ((b * b) - 4 * a * c);
let x1, x2;
alert("O valor de delta é: " + delta);
if (delta < 0) {
    alert("Essa equação não possui raiz.");
}
else if (delta == 0) {
    let x1 = (-b + delta) / 2 * a;
    alert("Esta equação possuí somente 1 raiz: " + x1);
}
else {
    x1 = (-(b) + Math.sqrt(delta)) / (2 * a);
    x2 = (-(b) - Math.sqrt(delta)) / (2 * a);
    alert("Essa equação possui duas raízes: " + x1 + " e " + x2);
}