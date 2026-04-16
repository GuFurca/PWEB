var jogador;
var computador;
var quemvenceu;

function IniciarJogo(){
    jogador = prompt("Vamos jogar um JOKENPOOO, seguinte amigo: Pedra = 1, Tesoura = 2 e Papel = 3");
    let computador = Math.random(0, 1);
    alert("tu escolheu: " + jogador);
    if(computador <=0.33){
        computador = 1;
    } else if(computador <=0.66){
        computador = 2;
    }else{
        computador = 3;
    }
    alert("O computador escolheu: " + computador);
    if(computador==jogador){
        quemvenceu="empate, melhor que perder eu acho né ;C";
    } else if((jogador==1 && computador ==2)||(jogador==2 && computador==3)||(jogador==3 && computador==1)){
        quemvenceu="tu ganhou, tá de hack!!!!! >:V";
    } else{
        quemvenceu="Perdeu para o computador, moggado :v";
    }
    alert("O resultado é: " + quemvenceu);
}