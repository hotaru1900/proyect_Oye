function limpiarErrores(){
    var errores = document.getElementsByClassName("error");
    for(var i = 0; i < errores.length; i++){
      errores[i].innerHTML = "";
    }
  }

function validar(formulario){

    limpiarErrores();

    if (formulario.nombre.value.trim().length == 0) {
        document.getElementById("errorNombre").innerText = "Campo obligatorio";
        formulario.nombre.focus();
        return false;
    }
    if (formulario.apellido.value.trim().length == 0) {
        document.getElementById("errorApellido").innerText = "Campo obligatorio";
        formulario.apellido.focus();
        return false;
    }
   
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

    if (formulario.passconfir.value.trim().length == 0) {
        document.getElementById("errorCorpass").innerText = "Confirme su contraseña";
        formulario.passconfir.focus(); 
        return false;
    }

    if (formulario.password.value != formulario.passconfir.value) {
        document.getElementById("errorCorpass").innerText = "Su confirmación no coincide";
        formulario.passconfir.focus();
        return false;
    }

    if (formulario.genero.value == "") {
        document.getElementById("errorGenero").innerText = "Seleccione un genéro musical";
        formulario.genero.focus();
        return false;
    }

    if (formulario.edad.value == "") {
        document.getElementById("errorEdad").innerText = "Seleccione su edad";
        formulario.genero.focus();
        return false;
    }

    if (!formulario.terminos.checked) {
        document.getElementById("errorTerminos").innerText = "Debe aceptar los términos de uso";
        formulario.genero.focus();
        return false;
    }
    

    alert("Felicidades, registro exitoso!")
    return  true;
    
}
