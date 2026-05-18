function upper_down(tipo){
    let campo = document.getElementById("idPalavra");
    if (document.forms.formulario1.elements[0].value == "" || document.forms.formulario1.elements[0].value.length < 2 || !/[a-zA-Z]/.test(document.forms.formulario1.elements[0].value)) {
        alert("Coloca uma palavra né gênio");
        document.forms.formulario1.elements[0].focus();
        return false;
    }else if(tipo === 1) {
        campo.value = campo.value.toUpperCase(); 
    }else if(tipo ===2) {
        campo.value = campo.value.toLowerCase();
    }
}