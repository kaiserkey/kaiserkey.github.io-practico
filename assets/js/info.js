const imagenes = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg",
    "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg",
    "img11.jpg", "img12.jpg", "img13.jpg", "img14.jpg", "img15.jpg",
    "img16.jpg", "img17.jpg", "img18.jpg", "img19.jpg", "img20.jpg"]

function obtenerImagen() {
    const url = window.location.href;
    const valor = url.split("=")[1];

    return valor;
};

let img = obtenerImagen();
const imagen = document.querySelector(".imagen");

imagen.src = "./assets/img/" + img;