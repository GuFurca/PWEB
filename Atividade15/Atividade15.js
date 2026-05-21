function validarDados() {
            
            // usando a posicao no formulario
            if (document.forms.formulario1.elements[0].value == "" || document.forms.formulario1.elements[0].value.length < 10) {
                alert("Preencha campo NOME certo né? Menos de 10 caracteres? É nome de pet?");
                document.forms.formulario1.elements[0].focus();
                return false;
            };

            // usando o nome no formulario
            if (document.forms.formulario1.elements["idEmail"].value == "" || document.forms.formulario1.elements["idEmail"].value.indexOf('@') == -1 || document.forms.formulario1.elements["idEmail"].value.indexOf('.') == -1) {
                alert("Preencha campo E-MAIL corretamente!");
                document.forms.formulario1.elements.idEmail.focus();
               return false;
            }

            //usando o nome no formulario  de maneira direta
            if (document.forms.formulario1.elements.idMensagem.value == "" || document.forms.formulario1.elements.idMensagem.value.length < 20) {
                alert("É necessario preencher o campo MENSAGEM com pelo menos 20 caracteres!");
                document.getElementById("idMensagem").focus();
                return false;
            }

            if (document.getElementById("IdRadio1").checked) {
                alert("Volte sempre à está página!");
                return true;
            } else{
                alert("Que bom que voce voltou a visitar essa página!")
                return true;
            }

            return true;
        }