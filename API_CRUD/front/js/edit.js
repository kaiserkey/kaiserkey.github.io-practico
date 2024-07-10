document.addEventListener("DOMContentLoaded", () => {
  // obtenemos el formulario de edicion
  const formEditar = document.querySelector("#form");

  //obtener los parametros de la URL
  const parametrosURL = new URLSearchParams(window.location.search);
  // obtener el id de post que queremos editar
  //http://127.0.0.1:5501/CLASES/Clase33/FRONT/edit.html?id=1
  const iDUsuario = parametrosURL.get("id");

  // funcion para oobtener los datos del post por Id
  const traerUusuario = async (id) => {
    try {
      const respuesta = await axios.get(`http://localhost:3030/usuarios/${id}`);
      console.log(respuesta);
      const usuario = respuesta.data;
      //Asignafr los valores obtenido a los campos del formulario

      document.querySelector("#nombre").value = usuario.nombre;
      document.querySelector("#apellido").value = usuario.apellido;
      document.querySelector("#emailform").value = usuario.mail;
      document.querySelector("#telefono").value = usuario.telefono;
      document.querySelector("#passwordform").value = usuario.password;
      document.querySelector("#contacto").value = usuario.formaContacto;
    } catch (error) {
      console.error(`Error al obtener el posteo :`, error);
    }
  };

  //llamar a la funcion para obtener el post actual

  if (iDUsuario) {
    traerUusuario(iDUsuario);
  }

  //funcion para actuallizar el posteo

  formEditar.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    const actualizarUsuario = {
      nombre: document.querySelector("#nombre").value,
      apellido: document.querySelector("#apellido").value,
      mail: document.querySelector("#emailform").value,
      telefono: document.querySelector("#telefono").value,
      password: document.querySelector("#passwordform").value,
      formaContacto: document.querySelector("#contacto").value,
    };

    try {
      await axios.put(
        `http://localhost:3030/usuarios/${iDUsuario}`,
        actualizarUsuario
      );
      alert(`Usuario ${iDUsuario} Actualizado`);
      //Redirigir a la pagina principal despues de actualizar
      window.location.href = "index.html";
    } catch (error) {
      console.error(`Error al actualizar el posteo :`, error);
    }
  });
});
