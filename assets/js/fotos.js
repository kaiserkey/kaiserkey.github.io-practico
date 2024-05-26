const imagenes = [
    "img1.webp", "img2.webp", "img3.webp", "img4.webp", "img5.webp",
    "img6.webp", "img7.webp", "img8.webp", "img9.webp", "img10.webp",
    "img11.webp", "img12.webp", "img13.webp", "img14.webp", "img15.webp",
    "img16.webp", "img17.webp", "img18.webp", "img19.webp", "img20.webp",
    "img21.webp", "img22.webp", "img23.webp", "img24.webp", "img25.webp",
    "img26.webp", "img27.webp", "img28.webp", "img29.webp", "img30.webp",
    "img31.webp", "img32.webp", "img33.webp", "img34.webp", "img35.webp",
    "img36.webp", "img37.webp", "img38.webp", "img39.webp", "img40.webp"
];

const contenedor = document.querySelector(".contenedor-fotos");

let ventana = document.documentElement.clientWidth;
let columna = Math.trunc(ventana / 250);
const divCo = [];

function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function crearColumnas() {
    for (let c = 0; c < columna; c++) {
        const columnaDiv = document.createElement("div");
        columnaDiv.classList.add("contenedor-columna");
        divCo[c] = columnaDiv;
    }
}

async function cargarImagen(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Error al cargar la imagen: ${src}`));
    });
}

async function cargarContenido(limite = 3 * columna) {
    const fragment = document.createDocumentFragment();
    const imagenesParaCargar = [];

    for (let c = 0; c < columna; c++) {
        for (let i = c; i < limite; i += columna) {
            if (imagenes[i]) {
                imagenesParaCargar.push(imagenes[i]);
            }
        }
    }

    try {
        const imagenesCargadas = await Promise.all(imagenesParaCargar.map(img => cargarImagen(`./assets/img/${img}`)));

        imagenesCargadas.forEach((img, idx) => {
            const c = idx % columna;
            const divCP = document.createElement("div");
            divCP.classList.add("contenedor-post");

            const divCI = document.createElement("div");
            divCI.classList.add("contenedor-imagen");

            const link = document.createElement("a");
            link.href = `./info.html?imagen=${imagenesParaCargar[idx]}`;

            const imgElement = document.createElement("img");
            imgElement.classList.add("imagen");
            imgElement.src = img.src; // Asignamos la fuente de la imagen cargada

            link.appendChild(imgElement); // Agregamos la imagen al enlace

            const divCB = document.createElement("div");
            divCB.classList.add("contenedor-botones");

            const btnguardar = document.createElement("button");
            btnguardar.classList.add("guardar");
            const iconG = document.createElement("i");
            iconG.classList.add("bi", "bi-download", "icon-guardar");

            const btncompartir = document.createElement("button");
            btncompartir.classList.add("compartir");
            const iconC = document.createElement("i");
            iconC.classList.add("bi", "bi-share-fill", "icon-compartir");

            const btnmenu = document.createElement("button");
            btnmenu.classList.add("menu");
            const iconM = document.createElement("i");
            iconM.classList.add("bi", "bi-three-dots-vertical", "icon-menu");

            btnguardar.append(iconG);
            btncompartir.append(iconC);
            btnmenu.append(iconM);

            divCI.appendChild(link);
            divCB.append(btnguardar, btncompartir, btnmenu);

            divCP.append(divCI, divCB);
            divCo[c].append(divCP);
        });

        fragment.append(...divCo);
        contenedor.append(fragment);
    } catch (error) {
        console.error(error);
    }
}

function recargar() {
    ventana = document.documentElement.clientWidth;
    columna = Math.trunc(ventana / 250);
    contenedor.innerHTML = '';
    crearColumnas();
    mezclarArray(imagenes); // Baraja las imágenes antes de cargar el contenido
    cargarContenido();
}

function MasContenido() {
    if (window.scrollY + window.innerHeight > 0.9 * document.body.scrollHeight) {
        const loadedImages = document.querySelectorAll(".contenedor-post").length;
        cargarContenido(loadedImages + 3 * columna);
    }
}

// Inicializar
crearColumnas();
mezclarArray(imagenes); // Baraja las imágenes antes de cargar el contenido
cargarContenido();
window.onresize = recargar;
window.onscroll = MasContenido;
