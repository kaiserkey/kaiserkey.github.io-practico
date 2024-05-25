const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const mensaje = document.getElementById("warning");
var emailValidation =  /@.com/;



form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false
        if(email.value.length <=0){
            warning +='Debe escribir una direccion de Email <br>'
            entrar = true
        } 
        if(emailValidation.test(email.value)){
            warning +='El email debe ser correcto <br>'
            entrar = true
        } 
        if(password.value.length <4){
            warning +='La contraseña debe contener mas de 4 caracteres <br>'
            entrar = true
        }
        if(entrar){
            mensaje.innerHTML = warning
        }else{
            mensaje.innerHTML = "Inicio Completado"
        }
})

