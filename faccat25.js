alert("Ver saldo da conta");
let saldo =parseFloat(prompt(" Saldo da conta: "));
let debito =parseFloat(prompt(" Debito da conta: "));
let credito=parseFloat(prompt(" Crédito da conta: "));
let saldoAtual= saldo - debito + credito;

if (saldoAtual < 0){
    alert(saldoAtual + "R$ Seu saldo está negativo.");   
}
else{
    alert(saldoAtual + "R$ Seu saldo está positivo.");  
}

