let numeros = new Array(3);


function IniciarFunc1(){
    for(let i=0; i<3; i++){
        numeros[i]= Number(prompt("Qual o " + eval(i+1) + " número?"));
    }
    let maior = Math.max(...numeros);
    alert("O maior número é: " + maior + ".");
}

function IniciarFunc2(){
    for(let i=0; i<3; i++){
        numeros[i]= Number(prompt("Qual o " + eval(i+1) + " número?"));
    }
    let crescente = numeros.toSorted(function (a, b) {return a-b});
    alert("Em ordem crescente é: " + crescente[0] + ", " + crescente[1] + ", " + crescente[2] + ".");
}

function IniciarFunc3(){
    let palavra = prompt("Qual a palavra tu quer conferir se é um palíndrome, ou seja, igual de trás para frente? (espaços serão desconsiderados)")
    palavra = palavra.replace(/\s/g, ""); // \s = qualquer espaço em branco, /g = global
    palavra = palavra.toUpperCase(); 
    let palavrarev = palavra.split("").reverse().join(""); //split divide em vários negócios e o join faz o array
    if(palavra === palavrarev){
        alert("é palídromo, que nem o pokémon GIRAFARIG");
        
    } else{
        alert("mas num é de jeito nenhum :v");
    }
}

function IniciarFunc4(){
    let palavra1 = prompt("Primeira palavra: ");
    let palavra2 = prompt("Segunda palavra: ");

    if(palavra1 === null || palavra1 === undefined || palavra2 === null || palavra2 === undefined || palavra1.trim() === "" || palavra2.trim() === ""){
        alert("ow pilantra, tu colocou alguma coisa null ou undefined, arruma isso aí!!!");
    }else if(palavra1.includes(palavra2) || palavra2.includes(palavra1)){
        alert("Boa, são pseudominos");
    }else{
        alert("Não são pseudominos, tá viajando?");
    }
}

function IniciarFunc5(){
    let data = new Date(prompt("Diz uma data aí (Exemplo: 2026-04-26)")); //ficar maroto que tem um erro no js para horário geral e o de brásilia, ent fica 21 horas do dia anterior
    let dia = data.getDay();
    switch(dia){
        case 6:
            alert("Domingo, só prepara para a depressão de domingo a noite ;-;");
            break;
        case 0:
            alert("Segunda, só tristeza");
            break;
        case 1:
            alert("Terça, aguenta aí!!");
            break;
        case 2:
            alert("Quarta, tamo quase!!");
            break;
        case 3:
            alert("Quinta, TAMO MUITO PERTO!!!!!!");
            break;
        case 4:
            alert("Sexta, SEXTOU com S de SERVEJA 😈");
            break;
        case 5:
            alert("Sábado, só alegria");
            break;
        default:
            alert("Algo deu muito errado");
    }
    
}