

function calcIMC(){
    let altura = Number(prompt("Fala a sua altura aí parceiro"));
    let pesoatual = Number(prompt("Agora fala o seu peso atual"));
    let imc = pesoatual/Math.pow(altura, 2);
    if (imc < 18.5){
        alert("O IMC é: " + imc.toFixed(2) + " A classificação é: Magreza e o Grau de obesidade é: O");
    } else if(imc <= 24.9){
        alert("O IMC é: " + imc.toFixed(2) + " A classificação é: Normal e o Grau de obesidade é: O");
    } else if(imc <= 29.9){
        alert("O IMC é: " + imc.toFixed(2) + " A classificação é: Sobrepeso e o Grau de obesidade é: I");
    } else if(imc <= 39.9){
        alert("O IMC é: " + imc.toFixed(2) + " A classificação é: Obesidade e o Grau de obesidade é: II");
    } else if(imc >= 40){
        alert("O IMC é: " + imc.toFixed(2) + " A classificação é: Obesidade Grave e o Grau de obesidade é: III");
    }
}