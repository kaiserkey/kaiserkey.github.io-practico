const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("emailform");
const telefono = document.getElementById("telefono");
const password = document.getElementById("passwordform");
const password2 = document.getElementById("password2form");
const form = document.getElementById("form");
const mensaje = document.getElementById("warning");
const termino = document.getElementById("Acepta");
var emailValidation = / @.com / 

form.addEventListener("submit", e=>{
    e.preventDefault() // Evita el envío del formulario
    let warning = ""
    let error = false
        if (nombre.value.length <4 ){
            warning +='El nombre debe contener mas de 4 caracteres <br>'
            error = true
        }
        if(apellido.value.length <4 ){
            warning +='El apellido debe contener mas de 4 caracteres <br>'
            error = true
        }
        if(emailValidation.test(email.value)){
            warning +='El email debe ser correcto <br>'
            error = true
        }
        if(telefono.value.length <8){
            warning += 'El telefono debe contener mas de 8 numeros <br>'
            error = true
        }
        if(password.value.length <4){
            warning +='La contraseña debe contener mas de 4 caracteres <br>'
            error = true
        } 

        if(password2.value.length <4) {
            warning +='La contraseña debe contener mas de 4 caracteres <br>'
            error = true
        }

        if(password2.value !== password.value){
            warning += 'Las contraseñas deben ser identicas <br>'
            error = true
        }
        
        
        if(error){
            mensaje.innerHTML = warning
        }else{
            mensaje.innerHTML = "¡Registro Completado!"
        }
})






