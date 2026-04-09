var nome;
var nota1;
var nota2;
var nota3;
var nota4;
var media;
var mediaformatada;

nome = prompt("Qual é o seu nome?");
nota1 = prompt("Qual é a sua nota 1?");
nota2 = prompt("Qual é a sua nota 2?");
nota3 = prompt("Qual é a sua nota 3?");
nota4 = prompt("Qual é a sua nota 4?");
media = ((parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)))/4;
mediaformatada = media.toFixed(2)
alert("Sua média é " + mediaformatada)

