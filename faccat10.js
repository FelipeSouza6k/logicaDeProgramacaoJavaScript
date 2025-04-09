alert("Calcular o valor do carro para o consumidor final");
let custoFabrica = parseInt(prompt("Digite o custo de fábrica deste carro: "));
let distribuidor = 0.28;
let imposto = 0.45;
let valorCarro = custoFabrica + (custoFabrica * distribuidor) + (custoFabrica * imposto);
alert(" o valor do carro para o consumidor final é: "+ valorCarro + "R$");