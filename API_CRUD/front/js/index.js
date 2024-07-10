/* DOMContentLoaded */
document.addEventListener("DOMContentLoaded", () => {
  /* tabla donde se mostraran los usuarios */
  const TablaUsuarios = document.querySelector("#tabla-usuarios");

  // funcion para obtener los datos de nuestra API utilizando AXIOS

  const fetchUsuarios = async () => {
    try {
      const respuesta = await axios.get(`http://localhost:3030/usuarios/`);
    //   console.log(respuesta.data);
      const usuarios = respuesta.data;
      //limpiar la tabla antes de agregar los nuevos datos
      TablaUsuarios.innerHTML = "";
      /* Iterar sobre los datos y agregar cada posteo a la tabla */
      let n = 0;
      usuarios.forEach((usuario) => {
        // creo una nueva fila
     
        const fila = document.createElement("tr");
        //Crear celdas

        const celdaN = document.createElement("td");
        const celdaNombre = document.createElement("td");
        const celdaApellido = document.createElement("td");
        const celdaEmail = document.createElement("td");
        const celdaAccionesEditar = document.createElement("td");
        const celdaAccionesEliminar = document.createElement("td");
        // asignar el contenido de las celdas
        n = n + 1;
        celdaN.textContent = n;

        celdaNombre.textContent = usuario.nombre;
        celdaApellido.textContent = usuario.apellido;
        celdaEmail.textContent = usuario.mail;

        // crear el boton de eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar"
        botonEliminar.className = "btn btn-outline-secondary"
        botonEliminar.addEventListener("click",()=>{borrarUsuario(usuario.id)})

        // crear el boton para editar un posteo
        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar"
        botonEditar.className = "btn btn-outline-secondary"
        botonEditar.addEventListener("click", ()=>{
        // Redirigir a la pagina de edicion  con el ID del post en la url
        window.location.href = `edit.html?id=${usuario.id}`
        })
        // agregar los botones a la celda de acciones
        celdaAccionesEliminar.appendChild(botonEliminar);
        celdaAccionesEditar.appendChild(botonEditar);

        // agregamos las celdas a la fila
        fila.appendChild(celdaN);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaApellido);
        fila.appendChild(celdaEmail);
        fila.appendChild(celdaAccionesEliminar);
        fila.appendChild(celdaAccionesEditar);

        // Agregar la fila al cuerpo de la tabla
        TablaUsuarios.appendChild(fila);
      });
    } catch (error) {
      console.error(`Error al obtener los post : ${error}`);
    }
  };
  // funcion para eliminar unposteo
  const borrarUsuario = async (id)=>{
      try {
          await axios.delete (`http://localhost:3030/usuarios/${id}`)

          alert(`Usuario eliminado`);
          //Redirigir a la pagina principal despues de actualizar
          window.location.href = "index.html";
      } catch (error) {
          console.error (`Error al eliminar el post : ${error}`)
      }
  }

  //llamar a la funcion para obtener y mostrar los posteos cuando Carga la pagina
  fetchUsuarios();
});
