
/* DOMContentLoaded */
document.addEventListener("DOMContentLoaded",()=>{
   
    /* Obtener el formulario para crear un nuevo usuario */
    const formCrearUsuario = document.querySelector("#form");

    formCrearUsuario.addEventListener("submit", async function (evento){
        evento.preventDefault();
        console.log("crear usuario")
        const nuevoUsuario = {
            nombre: document.querySelector("#nombre").value,
            apellido:document.querySelector("#apellido").value,
            mail: document.querySelector("#emailform").value,
            telefono: document.querySelector("#telefono").value,
            password: document.querySelector("#passwordform").value,
            formaContacto: document.querySelector("#contacto").value,

        };
        try {
            await axios.post(`http://localhost:3030/usuarios/`,nuevoUsuario)
            //limpiamos el formulario
            alert(`Usuario creado`);
            //Redirigir a la pagina principal despues de actualizar
            window.location.href = "index.html";
        } catch (error) {
            console.error (`Error al crear usuario: ${error}`)
            console.log("usuario no creado")
        }
    
    })
})