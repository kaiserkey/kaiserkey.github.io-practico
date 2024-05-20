const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("emailform");
const telefono = document.getElementById("telefono");
const contraseña = document.getElementById("contraseñaform");
const contraseña2 = document.getElementById("contraseña2form");
const form = document.getElementById("form")
const mensaje = document.getElementById("warning")
const termino = document.getElementById("Acepta")
var emailValidation = / @ . /

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false
        if (nombre.value.length <4 ){
            warning +='El nombre debe contener mas de 4 caracteres <br>'
            entrar = true
        }
        if(apellido.value.length <4 ){
            warning +='El apellido debe contener mas de 4 caracteres <br>'
            entrar = true
        }
        if(emailValidation.test(email.value)){
            warning +='El email debe ser correcto <br>'
            entrar = true
        }
        if(telefono.value.length <8){
            warning += 'El telefono debe contener mas de 8 numeros <br>'
            entrar = true
        }
        if(contraseña.value.length <4){
            warning +='La contraseña debe contener mas de 4 caracteres <br>'
            entrar = true
        }
        /* if(contraseña2 !== contraseña){
            warning += 'las contraseñas deben ser identicas <br>'
            entrar = true
        } */
        
        
        /*  if(!noAceptatermino('input[name="noterminos"]:checked')) {
            warning +='Debe Seleccionar los Terminos de Conficencialidad <br>';
            entrar = true;
        } */
        /*   if(termino.checked == false){
            warning +='Debe aceptar los Terminos de Confidencialidad <br>';
            entrar = true;
        } */

        if(entrar){
            mensaje.innerHTML = warning
        }else{
            mensaje.innerHTML = "¡Registro Completado!"
        }
})






