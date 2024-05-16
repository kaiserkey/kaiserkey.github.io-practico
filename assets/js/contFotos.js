const imagenes = [  "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", 
                    "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg", 
                    "img11.jpg", "img12.jpg", "img13.jpg", "img14.jpg", "img15.jpg", 
                    "img16.jpg", "img17.jpg", "img18.jpg", "img19.jpg", "img20.jpg",
                    "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", 
                    "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg", 
                    "img11.jpg", "img12.jpg", "img13.jpg", "img14.jpg", "img15.jpg", 
                    "img16.jpg", "img17.jpg", "img18.jpg", "img19.jpg", "img20.jpg"]

const contenedor = document.querySelector(".contenedor-fotos");
const frag = document.createDocumentFragment();

// crea las columnas, DIV contenedor-columna
var ventana = document.documentElement.clientWidth;   // tamaño de la ventna
var columna = Math.trunc(ventana / 250);    // numero de columnas

const divCo = [];
function crearColumnas() {
    console.log("hola crear")
    for ( let c = 0 ; c < columna; c++) {
    divCo[c] = document.createElement("div");
    divCo[c].classList.add("contenedor-columna");
}
}

// --------carga las imagenes y los boptones---------

function cargarContenido() {
    let fin = 4 * columna;
    for ( let c = 0 ; c < columna; c++) {
        
        for ( let i = 0 + c ; i < fin; i+=columna) {

            const divCP = document.createElement("div");
            divCP.classList.add("contenedor-post");
            const divCI = document.createElement("div");
            divCI.classList.add("contenedor-imagen");
            const img = document.createElement("img");
            img.classList.add("imagen");
            img.src = "./assets/imagenes/" + imagenes[i];

            const divCB = document.createElement("div");
            divCB.classList.add("contenedor-botones");
            const btnguardar = document.createElement("button");
            btnguardar.classList.add( "guardar" );

            const iconG = document.createElement("i");
            iconG.classList.add("bi", "bi-download", "icon-guardar");

            const btncompartir = document.createElement("button");
            btncompartir.classList.add( "compartir");

            const iconC = document.createElement("i");
            iconC.classList.add("bi", "bi-share-fill", "icon-compartir");

            const btnmenu = document.createElement("button");
            btnmenu.classList.add( "menu" );

            const iconM = document.createElement("i");
            iconM.classList.add("bi", "bi-three-dots-vertical", "icon-menu");

            btnguardar.append(iconG);
            btncompartir.append(iconC);
            btnmenu.append(iconM);
            divCI.append(img);
            divCB.append(btnguardar, btncompartir, btnmenu);
            divCP.append(divCI, divCB);
            divCo[c].append(divCP);    
        };
        frag.append(divCo[c]);
    };
    contenedor.append(frag);
};

// ------recargar contenido al combiar el tamaño de la ventana---------

function recargar() {
    ventana = document.documentElement.clientWidth;   // tamaño de la ventna
    columna = Math.trunc(ventana / 250);
    contenedor.innerHTML = '';
    frag.innerHTML = '';
    crearColumnas();
    cargarContenido();
}

// -------funcion para el scroll------------

function MasContenido() {
    if (window.scrollY + window.innerHeight > 0.70 * (document.body.scrollHeight)) {
        cargarContenido(columna);
    } 
}
  

crearColumnas(); 

cargarContenido();

window.addEventListener("scroll", MasContenido);

window.onresize = recargar;