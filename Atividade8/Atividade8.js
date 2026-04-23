
let idade = new Array(10);

let sexo = new Array(10);

let opiniao = new Array(10);
let maisvelha=0;
let maisnovo=10000000;
let contpessimo = 0;
let contpessoasrespon=0;
let contOtimoBom=0;
var porcOtimoBom;
let somaIdade = 0;
var media;

function IniciarPesquisa(){

    for(let i=0; i<10; i++){
        idade[i]= Number(prompt("Qual a idade da " + eval(i+1) + " pessoa"));
        if(idade[i] > maisvelha){
            maisvelha = idade[i];
        } 
        if(idade[i] < maisnovo) {
            maisnovo = idade[i];
        }
        somaIdade = somaIdade + idade[i];
        sexo[i] = prompt("Qual o gênero da " + eval(i+1) + " pessoa (M = Másculino, F = Feminino e O = outros)")
        if(sexo[i] != null){
                contpessoasrespon++;
        }
        opiniao[i] = Number(prompt("Qual a opinião da " + eval(i+1) + " pessoa (Ótimo = 4, Bom = 3, Regular = 2, Péssimo = 1)"));
        if((opiniao[i]==4) || (opiniao[i]==3)){
            contOtimoBom++;
        } else if(opiniao[i]==1){
            contpessimo++;
        }
        
        
        
        
    }
    

    porcOtimoBom = (contOtimoBom/contpessoasrespon)*100;
    media = somaIdade/contpessoasrespon;
    alert("A média é: " + media + "\nA pessoa mais velha tem: " + maisvelha + "\nA pessoa mais nova é " + maisnovo + "\nQuantidade que respondeu péssimo: " + contpessimo + "\nPorcentagem que respondeu ótimo bom: " + porcOtimoBom + "%" + "\nO número de pessoas que respondeu o questionário: " + contpessoasrespon);
}