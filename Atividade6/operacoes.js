var n1;
var n2;
var soma;
var subi;
var produ;
var divis;
var divis_resto;



n1 = prompt("Qual é o primeiro número?");
n2 = prompt("Qual é o segundo número?");

soma = parseFloat(n1) + parseFloat(n2);
subi = parseFloat(n1) - parseFloat(n2);
produ = parseFloat(n1) * parseFloat(n2);
divis = parseFloat(n1) / parseFloat(n2);
divis_resto = parseFloat(n1) % parseFloat(n2);

alert("Soma: " + soma + " Subtração: " + subi + " Produto: " + produ + " Divisão: " + divis + " Resto de divisão: " + divis_resto);