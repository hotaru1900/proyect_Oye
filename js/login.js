
function limpiarErrores(){
    var errores = document.getElementsByClassName("error");
    for(var i = 0; i < errores.length; i++){
      errores[i].innerHTML = "";
    }
  }

function validar(formulario){

    limpiarErrores();
   
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
        document.getElementById("errorEmail").innerText = "Ingrese su correo electrónico";
        formulario.email.focus();
         return false;
    }

    if (formulario.password.value.trim().length == 0) {
        document.getElementById("errorPassword").innerText = "Contraseña Obligatorio";
        formulario.password.focus();
        return false;
    }

    if (formulario.password.value.trim().length < 8) {
        document.getElementById("errorPassword").innerText = "Ingrese contraseña mayor de 8 digitos";
        formulario.password.focus(); 
        return false;
    }

    return true;
}

