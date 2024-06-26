// BLOQUE PARA COLOCAR DE FORMA AUTOMÁTICA EL MES EN EL "span" DE "#contentHighlight__title" AL HABE CAMBIO DE MES
const monthArray = [" enero", " febrero", " marzo", " abril", " mayo", " junio", " julio", " agosto", " septiembre", " octubre", " noviembre", " diciembre"];
const contentHighlight__month = document.querySelector("#contentHighlight__title span");
contentHighlight__month.textContent = monthArray[(new Date().getMonth())];

// ARRAY USADO EN EL SLIDER QUE MUESTRA EL CONTENIDO DE LO MÁS DESTACADO DEL MES EN "#contentHighlight__body"
const sliderBox__array = [
    "#Gatos", "https://media.istockphoto.com/id/1483360378/es/foto/lindo-gato-atigrado-joven-en-un-jard%C3%ADn-mirando-a-una-abeja.jpg?s=612x612&w=0&k=20&c=4oiHRkdXuiWY4091Q15acprm8Y546zD5T7EqBSvqbfc=",
    "#Argentina", "https://media.istockphoto.com/id/1398457995/es/vector/bandera-de-fondo-argentina.jpg?s=612x612&w=0&k=20&c=lks5qOvW3xbJdw1gPwpoNH-8nbeAr0qs_uy1M5fFaiE=",
    "#Comida", "https://media.istockphoto.com/id/1496941161/es/foto/s%C3%A1ndwich-de-chorizo-a-la-plancha.jpg?s=612x612&w=0&k=20&c=v38YrfpuaYJxby3dgX5AMOuC2wun7u5SIPqubvYbWAI=",
    "#Pedrito Pérez", "https://media.istockphoto.com/id/1452241716/es/foto/retrato-de-un-hombre-adulto-medio-al-aire-libre.jpg?s=1024x1024&w=is&k=20&c=nPr6qbAUT2cE-CqG9wDsDQx2XtzV9daSfI880d1DvJ0=",
    "#Autos", "https://media.istockphoto.com/id/1459174334/es/foto/ford-focus-rs.jpg?s=612x612&w=0&k=20&c=TOs_qnxzsZVn3-7ur0JEdvkvJwu4VsZhprUsjR-XFWk=",
    "#Viajes", "https://media.istockphoto.com/id/1583161497/es/foto/hombre-viajero-de-pie-con-el-amanecer-sobre-la-monta%C3%B1a-kirkjufell-en-verano-en-islandia.jpg?s=612x612&w=0&k=20&c=bTKQ0q44vaFTnGkoBoHxKKaqsde_fFuwJC0NeCv-LT0=",
    "#Moda", "https://media.istockphoto.com/id/1742405436/es/foto/mujer-joven-frente-a-una-forma-de-luz-circular.jpg?s=612x612&w=0&k=20&c=3PCsqG9ycfh-gcWqL5_FFQa2kZW0x3x8qJOzXPKPy80=",
    "#Basketball", "https://media.istockphoto.com/id/1449021054/es/foto/joven-haciendo-girar-una-pelota-de-baloncesto-en-un-campo.jpg?s=612x612&w=0&k=20&c=wOKpKtxSuUD7EpGJNVQOlqoOizZnA_RZdD9VAhnBxJ4=",
    "#Robótica", "https://media.istockphoto.com/id/1700288868/es/foto/ingeniera-de-estudiantes-asi%C3%A1ticos-ensamblando-kits-de-rob%C3%B3tica-aprendiendo-control-mec%C3%A1nico.jpg?s=612x612&w=0&k=20&c=JaINkYCZEumvUdnIwDRfDgPzoI5_d1lrj2722_Uqh_I=",
    "#Astronomía", "https://media.istockphoto.com/id/1484278497/es/foto/paisaje-con-v%C3%ADa-l%C3%A1ctea-y-silueta-de-un-hombre-excursionista.jpg?s=612x612&w=0&k=20&c=mh-GJMGRWncNF69CaCmz0dii652r93TSrq90BoLWkSE=",
    "#Bosques", "https://media.istockphoto.com/id/1466653322/es/foto/mujer-de-primer-plano-plantando-un-abeto-joven-en-el-bosque-dej%C3%A1ndolo-en-el-suelo.jpg?s=612x612&w=0&k=20&c=seY-QgFGnR6JxQ599kl-8nux5Z9xnyvRyLsM05IfwLA=",
    "#Conciertos", "https://media.istockphoto.com/id/1498452992/es/foto/chica-disfrutando-bailando-en-festival-de-m%C3%BAsica.jpg?s=612x612&w=0&k=20&c=Aw8ykStL0ku4XHoA4gCG1sq5wD4Cu3iLzcdB3SCYTuo=",
    "#Programación", "https://media.istockphoto.com/id/1705601319/es/foto/j%C3%B3venes-desarrolladoras-de-software-asi%C3%A1ticas-que-usan-computadoras-para-escribir-c%C3%B3digo.jpg?s=612x612&w=0&k=20&c=15tH0arqjJbVySFyOeR6SkhHJ91-bPkQ2NnMjxZNcK4=",
    "#Auroras boreales", "https://media.istockphoto.com/id/1387126916/es/foto/magic-luces-de.jpg?s=612x612&w=0&k=20&c=qRneXafDB5Rl8aJmv8X7voZikvBoQaUesKcy3EbmE00=",
    "#Cumpleaños", "https://media.istockphoto.com/id/1502843454/es/foto/chica-de-cumplea%C3%B1os.jpg?s=612x612&w=0&k=20&c=pS0RH9AaYuCSJIhUm0etaYNPMxEjNKSmAM_yllBVPbo=",
    "#Motocicletas", "https://media.istockphoto.com/id/1457596651/es/foto/viajar-en-motocicleta-por-las-carreteras.jpg?s=612x612&w=0&k=20&c=HAv5BYI4zjKrSGVgYRPw8F75ZyBlSI7Rv38tTeGQ2pw=",
    "#Invierno", "https://media.istockphoto.com/id/1438178298/es/foto/hermosa-vista-del-amanecer-por-la-ma%C3%B1ana-en-el-camino-nevado-del-pa%C3%ADs.jpg?s=612x612&w=0&k=20&c=aXuagI2F2FN2bx3A3sF2Cv6ouyqQKkPuV8GpGMKJ3w4=",
    "#Otoño", "https://media.istockphoto.com/id/1437339341/es/foto/paseo-del-poeta-en-central-park-en-colores-de-follaje-oto%C3%B1al-manhattan-nueva-york.jpg?s=612x612&w=0&k=20&c=M1sNfErtNwORGwWuyMrKI3u1jFdPnkccQ6Guj45JI9M=",
    "#Espacio", "https://media.istockphoto.com/id/1371752135/es/foto/telescopio-espacial-hubble-en-el-espacio-profundo-observatorio-espacial-orbital-investigaci%C3%B3n.jpg?s=612x612&w=0&k=20&c=c7wy6v7dHqcHU-wSvVIUn7Fh0fn8OSrCdX3xxomr1q8=",
    "#Vida", "https://media.istockphoto.com/id/1149146449/es/foto/millennial-cheques-finanzas-en-smart-phone.jpg?s=612x612&w=0&k=20&c=0vFc8BIzdyxu78ltyDS1Jbx7vso9IZtzhvPkDyW5AKk=",
    "#Ingeniería", "https://media.istockphoto.com/id/1154085284/es/foto/vista-a%C3%A9rea-la-universidad-de-mu%C4%9Fla-y-la-intersecci%C3%B3n-de-carreteras-hospitalarias-turqu%C3%ADa.jpg?s=612x612&w=0&k=20&c=bGAIgSIgTp6GFTFUcV60Oe9CaDF3iUpnsCWa3ykMIPA=",
    "#Arquitectura", "https://media.istockphoto.com/id/1477456541/es/foto/edificio-moderno-en-blanco-y-negro.jpg?s=612x612&w=0&k=20&c=SkDV1wmjNB5Gao0yP37FSSvHfK36E0uZy5NFZpFZVmo=",
    "#Historia", "https://media.istockphoto.com/id/1454338439/es/foto/vista-a%C3%A9rea-de-la-antigua-ciudad-de-%C3%A9feso-antigua-ciudad-romana-el-destino-tur%C3%ADstico-m%C3%A1s.jpg?s=612x612&w=0&k=20&c=XBPuyPbPJYRoqbz--oKcyb83G8hIsXPwyZCzpmIjzzI=",
    "#Azul", "https://media.istockphoto.com/id/1486754158/es/vector/dise%C3%B1o-abstracto-de-fondo-de-malla-degradada-azul-borroso-para-su-presentaci%C3%B3n-fondo-de.jpg?s=612x612&w=0&k=20&c=cnr5uFzkM0LCONayeBdiR3oNr8guNrAPHwZMhUzgyLg=",
    "#Física", "https://media.istockphoto.com/id/888421376/es/foto/fondo-abstracto-zarcillos-rizado.jpg?s=612x612&w=0&k=20&c=zn3XC2wt7pxKUSFsmhjSpf4UZf3H5XGvysAcAcicgLM=",
    "#Mate", "https://media.istockphoto.com/id/1477624711/es/foto/dos-amigas-elaborando-y-bebiendo-yerba-mate-con-un-termo-rojo-en-el-campo-al-atardecer.jpg?s=612x612&w=0&k=20&c=APAeKvkHbzvQDZwgsXyIQM5RV7bwbpKai3HzUWpBvLc=",
    "#China", "https://media.istockphoto.com/id/1456756745/es/foto/paisaje-y-pastoral.jpg?s=612x612&w=0&k=20&c=woS_l-rlPMLbjWu8DOKjjQuxRWAIJr6N9uxorAnxZYA=",
    "#Ciclismo", "https://media.istockphoto.com/id/1430639978/es/foto/comenzando-la-bicicleta-de-monta%C3%B1a-cuesta-abajo.jpg?s=612x612&w=0&k=20&c=jZKRMmX-fPLNk2r4V8My0-mAH3XYWqNejPkfhaU2G6c=",
    "#Pokémon", "https://media.istockphoto.com/id/1085509316/es/foto/brote-de-pikachu-2018.jpg?s=612x612&w=0&k=20&c=FWHn_4muF0yFlKXtMe8OEVPEvoLLYZ6sXrOtrCrYclY=",
    "#Lectura", "https://media.istockphoto.com/id/1633541037/es/foto/lectura-de-vacaciones.jpg?s=612x612&w=0&k=20&c=9U6yXw1c3yydJUDVMlBxkiSSU_EQrJYAzbwD4lw8X3g=",
];

// CONSTANTES DE LOS ANCHOS DE PANTALLA PARA LA EJECUCIÓN DE CÓDIGO JAVASCRIPT EN EL DISEÑO RESPONSIVE


let sectionsQuantity = 4;
let imagesProSection = 6;

const rootSectionQuantity = document.documentElement.style.setProperty("--width__sliderBox", `${sectionsQuantity}` * 100 + "%");
for (let i = 0; i < sectionsQuantity; i++) {
    const section = sliderBox.appendChild(document.createElement("div"));
    section.classList.add("sliderBox__section");
    for (let j = 0; j < imagesProSection; j++) {
        const imgBox = section.appendChild(document.createElement("div"));
        imgBox.classList.add("sliderBox__imgBox");
        const img = imgBox.appendChild(document.createElement("img"));
        img.classList.add("sliderBox__img");
        // BLOQUE QUE COLOCA EL src Y EL title POR CADA UNA DE LAS IMAGENES DE "#contentHighlight__body" DE LO MÁS DESTACADO DEL MES
        const sliderBox__img = document.getElementsByClassName("sliderBox__img");
        for (let k = 0; k < sliderBox__img.length; k++) {
            sliderBox__img[k].title = sliderBox__array[k * 2];
            sliderBox__img[k].src = sliderBox__array[(k * 2) + 1];
        };
    };
};

// BLOQUE PARA CREAR EL SLIDER DE LO MÁS DESTACADO DEL MES
const sliderBox__section = document.querySelectorAll(".sliderBox__section");
const sliderBox__sectionFinal = sliderBox__section[sliderBox__section.length - 1];
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

sliderBox.insertAdjacentElement("afterbegin", sliderBox__sectionFinal);
function next() {
    const sliderBox__sectionInicial = document.querySelectorAll(".sliderBox__section")[0];
    sliderBox.style.marginLeft = "-200%";
    sliderBox.style.transition = "all 500ms";
    setTimeout(function () {
        sliderBox.style.transition = "none";
        sliderBox.insertAdjacentElement("beforeend", sliderBox__sectionInicial);
        sliderBox.style.marginLeft = "-100%";
    }, 500);
};
btnRight.addEventListener("click", function () {
    next();
});
function prev() {
    const sliderBox__section = document.querySelectorAll(".sliderBox__section");
    const sliderBox__sectionFinal = sliderBox__section[sliderBox__section.length - 1];
    sliderBox.style.marginLeft = "0%";
    sliderBox.style.transition = "all 500ms";
    setTimeout(function () {
        sliderBox.style.transition = "none";
        sliderBox.insertAdjacentElement("afterbegin", sliderBox__sectionFinal);
        sliderBox.style.marginLeft = "-100%";
    }, 500);
};
btnLeft.addEventListener("click", function () {
    prev();
});

// ARRAY USADO EN EL CONTENIDO DE LAS COMUNIDADES EN "#contentCommunity__body"
const community__imgArray = [
    "Todo sobre nosotros", "https://media.istockphoto.com/id/1445225052/es/foto/pu%C3%B1os-cerrados-sosteniendo-la-camiseta-de-la-selecci%C3%B3n-argentina-de-f%C3%BAtbol.jpg?s=1024x1024&w=is&k=20&c=-8LH9H5JP9zAiOuGoeQoYLlYiS_NvaEASrqqaI2w2Kc=",
    "Star wars universe", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupniqG7qHZRcjSSrfHyJRe6Kdj1_RVcTKlQ&s",
    "Ecoturismo suramérica", "https://media.istockphoto.com/id/1352725666/es/foto/senderismo-familiar-en-monta%C3%B1as-viajes-aventura-vacaciones-grupo-excursionistas-pareja-con.jpg?s=612x612&w=0&k=20&c=fsfL8K6J4gcD3Vr7aM7Z7Z0YGyFDB30yqwMwvsME_JQ=",
    "Batman true fans", "https://media.istockphoto.com/id/625877394/es/foto/r%C3%A9plica-del-dispositivo-bat-signal-en-la-convenci%C3%B3n-de-cosplay-de-yorkshire.jpg?s=612x612&w=0&k=20&c=QryrBSjmEabycsFHaQm06Wq7Is9lTNRV7A2LP3afZZM=",
    "Yo amo la arqueología", "https://media.istockphoto.com/id/1203879005/es/foto/pinturas-a-mano-en-la-cueva-de-las-manos-en-la-provincia-de-santa-cruz-patagonia-argentina.jpg?s=612x612&w=0&k=20&c=ws4PfD9-BPpG6VlDvX-uXMru5uyzplJrcTcmvsa-J4I=",
    "Conociendo el 'Serengueti'", "https://media.istockphoto.com/id/1403952272/es/foto/hermoso-paisaje-con-%C3%A1rbol-de-acacia-en-la-sabana-africana-y-cebra-en-el-fondo-del-kilimanjaro.jpg?s=612x612&w=0&k=20&c=sk2Gi67eaC3IOFCG7VAlOPLCZQT1JgNAK9dW5i8Z_08=",
    "Mar profundo", "https://media.istockphoto.com/id/1325337801/es/foto/buzo-nadando-en-una-cueva-submarina-hacia-la-luz-en-la-superficie-del-oc%C3%A9ano.jpg?s=612x612&w=0&k=20&c=WB5KKdBSV1I8XT3gT_q7gRxs275sYHOXJxZ6I5jWwsg=",
    "Paisajes de Noruega", "https://media.istockphoto.com/id/1450054416/es/foto/mujer-caminando-en-el-fondo-de-tre-cime-di-lavaredo-en-invierno.jpg?s=612x612&w=0&k=20&c=fNnxYibdydsDQQ6TE1xunVKMEMx9-xnC1rg9iuXJe-U=",
    "Apasionados por el fútbol", "https://media.istockphoto.com/id/148053733/es/foto/renderizado-3d-de-pelota-de-f%C3%BAtbol-mapa-mundial.jpg?s=612x612&w=0&k=20&c=Nm46FioozRrX83ZA-Ae45x2TcNFWn90d1J4J5uREyAI=",
    "Amantes de la cocina molecular", "https://media.istockphoto.com/id/1483157338/es/foto/verter-l%C3%ADquido-en-la-harina-para-hacer-vapor-de-hielo-seco.jpg?s=612x612&w=0&k=20&c=o9gKv7q1RqE1-Nph_IdmzeQRpH8DVZC8vFWTc__vcRw=",
    "Coffee lovers", "https://media.istockphoto.com/id/1480620579/es/foto/caf%C3%A9-cosechado-en-manos-de-un-hombre.jpg?s=612x612&w=0&k=20&c=6DtWA3n3GM4wZJxonUBSTkiYI50rpHEyUGi4Zpn1s58=",
    "Historia universal", "https://media.istockphoto.com/id/168258395/es/foto/mundo-antiguo-mapa-de-europa.jpg?s=612x612&w=0&k=20&c=efvRpcpRkOdTHt4omDNG_9i5n4ZePdgxLlTjVmJ0leE=",
];

// // BLOQUE PARA CREAR UNA CIERTA CANTIDAD DE IMAGENES DE "COMUNIDDES"
const contentCommunity__body = document.getElementById("contentCommunity__body");
const numCommunities = 12;
for (let i = 0; i < numCommunities; i++) {
    const communityBox = contentCommunity__body.appendChild(document.createElement("div"));
    communityBox.classList.add("communityBox");
    const img1 = communityBox.appendChild(document.createElement("img"));
    img1.classList.add("community__img1");
    const img2 = communityBox.appendChild(document.createElement("img"));
    img2.classList.add("community__img2");
    const imgText = communityBox.appendChild(document.createElement("p"));
    imgText.classList.add("community__imgText");
};

// BLOQUE QUE COLOCA LAS IMAGENES Y EL TEXTO SOBRE LAS CAJAS DE AS COMUNIDADES EN CADA ".communityBox"
const community__img1 = document.getElementsByClassName("community__img1");
const community__img2 = document.getElementsByClassName("community__img2");
const community__imgText = document.getElementsByClassName("community__imgText");
for (let i = 0; i < community__imgText.length; i++) {
    const titleIndex = i * 2;
    const srcIndex = titleIndex + 1;
    community__imgText[i].textContent = community__imgArray[titleIndex];
    community__img1[i].src = community__imgArray[srcIndex];
    community__img2[i].src = community__imgArray[srcIndex];
};

// ARRAY USADO PARA ALMACENAR LAS IMAGENES DEL CONTENIDO QUE SE CARGA DINAMICAMENTE AL HACER SCROLL
const arrayNameImg = [
    "Creador 01", "https://media.istockphoto.com/id/1470745452/es/foto/abriendo-la-puerta-a-la-libertad.jpg?s=612x612&w=0&k=20&c=4EVGyjgQN5Of2KpBhG-Lt7sYsH2HXKN1QNpwTMiaPPw=",
    "Creador 02", "https://media.istockphoto.com/id/1483055684/es/vector/arte-del-metaverso.jpg?s=612x612&w=0&k=20&c=binA6e_t9OUcSZJduoU5a7fkGx6Y0AGzUijWsJPFclk=",
    "Creador 03", "https://media.istockphoto.com/id/1751231741/es/foto/lindo-cachorro-de-foca-mirando-a-la-c%C3%A1mara-mientras-flota-en-la-superficie-azul-clara-del.jpg?s=612x612&w=0&k=20&c=aFj1Utghh7Bj6Go1s8sPS3QyRYyIUIcc1GvBfD3ZArM=",
    "Creador 04", "https://media.istockphoto.com/id/2133135123/es/foto/t-l-aerial-view-rows-of-trucks-driving-in-harbor-with-trailers.jpg?s=612x612&w=0&k=20&c=BM3pHSR0gJ4PPBkX52_qp9Dkwp-SUmXHb6FX1vCMxCs=",
    "Creador 05", "https://media.istockphoto.com/id/1869390184/es/foto/abstract-layered-and-folded-paper-background.jpg?s=612x612&w=0&k=20&c=sZPXSnZg5SN542kr-wwOfmOOpYhBeHcY4x5LIr0_kiQ=",
    "Creador 06", "https://media.istockphoto.com/id/1965039080/es/foto/vista-a%C3%A9rea-de-la-desembocadura-del-r%C3%ADo-isla-cristina-en-huelva-andaluc%C3%ADa-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=GTxaMBR9Kw6ejNWVe3aNPD8ulcmEYMBd4fHQb6KH-yg=",
    "Creador 07", "https://media.istockphoto.com/id/1948463768/es/foto/vista-a%C3%A9rea-del-campamento-a-lo-largo-de-la-playa.jpg?s=612x612&w=0&k=20&c=5UL0-PMSRrzRvs1cNF5LHJ8KU8h3ENq3VFyCYFpdx7I=",
    "Creador 08", "https://media.istockphoto.com/id/1414801614/es/foto/taquillas-escolares-con-art%C3%ADculos-equipos-y-accesorios-para-la-educaci%C3%B3n-vuelta-al-cole.jpg?s=612x612&w=0&k=20&c=pKk-EZCY_iUAfUzwdfF0rp6YaaLVwTKyx5qMHtg-NQM=",
    "Creador 09", "https://media.istockphoto.com/id/1365849981/es/foto/vista-de-alto-%C3%A1ngulo-de-las-dunas-texturizadas-del-desierto-al-amanecer.jpg?s=612x612&w=0&k=20&c=Deel0ejewe1okVHFOw371EmUlrNyMBRHRSuBL1r5KDk=",
    "Creador 10", "https://media.istockphoto.com/id/1503943375/es/foto/ni%C3%B1a-vietnamita-con-vestido-blanco-tradicional-de-ao-dai-con-secado-de-incienso-al-aire-libre.jpg?s=612x612&w=0&k=20&c=32glXLQOmrf-bxeVyK520OF8kD5ZEYMkf1vxJwLAMBo=",
    "Creador 11", "https://media.istockphoto.com/id/1328325993/es/foto/tomates-tostados-cortados-variados-en-bandeja-de-horneado-con-albahaca-y-romero-macro.jpg?s=612x612&w=0&k=20&c=o5Rv9tIHAlkM0qPB31BvHbAGZd8cVdxEcwIMpeyDDTA=",
    "Creador 12", "https://media.istockphoto.com/id/1755286679/es/foto/cultivo-de-hongos-en-el-bosque.jpg?s=612x612&w=0&k=20&c=sXlEs2-IoL4I6TzOAlOjG5l2HidT1HxIBZyU5ccYTsU=",
    "Creador 13", "https://media.istockphoto.com/id/1753059830/es/foto/urban-tr%C3%A1fico.jpg?s=612x612&w=0&k=20&c=tNhY9oEQh4hxsnQxHcYS1kDIWMx_FiNuSXsopcKLi_c=",
    "Creador 14", "https://media.istockphoto.com/id/1276580714/es/foto/renderizado-en-3d-fondo-minimalista-abstracto-marco-cuadrado-de-luz-de-ne%C3%B3n-azul-rosa-con.jpg?s=612x612&w=0&k=20&c=UNage-g9yIyl12k6lU3FRMRocSsiSU_CVDjRM_Qtp5U=",
    "Creador 15", "https://media.istockphoto.com/id/1416449650/es/foto/paisaje-del-metaverso.jpg?s=612x612&w=0&k=20&c=HV8L3aWHHgAQAoGhdj_UKmdH3fx-8mCziZ2MNyaFufY=",
    "Creador 16", "https://media.istockphoto.com/id/1965039080/es/foto/vista-a%C3%A9rea-de-la-desembocadura-del-r%C3%ADo-isla-cristina-en-huelva-andaluc%C3%ADa-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=GTxaMBR9Kw6ejNWVe3aNPD8ulcmEYMBd4fHQb6KH-yg=",
    "Creador 17", "https://media.istockphoto.com/id/1328325993/es/foto/tomates-tostados-cortados-variados-en-bandeja-de-horneado-con-albahaca-y-romero-macro.jpg?s=612x612&w=0&k=20&c=o5Rv9tIHAlkM0qPB31BvHbAGZd8cVdxEcwIMpeyDDTA=",
    "Creador 18", "https://media.istockphoto.com/id/1869390184/es/foto/abstract-layered-and-folded-paper-background.jpg?s=612x612&w=0&k=20&c=sZPXSnZg5SN542kr-wwOfmOOpYhBeHcY4x5LIr0_kiQ=",
    "Creador 19", "https://media.istockphoto.com/id/1459757171/es/foto/mujer-mirando-pasar-el-metro.jpg?s=612x612&w=0&k=20&c=3UTDxNOffiKVZkLsedGiNB92tSklSv1L2ddvnbURH-o=",
    "Creador 20", "https://media.istockphoto.com/id/1464561797/es/foto/unidad-procesadora-de-inteligencia-artificial-potente-componente-quantum-ai-en-placa-base-pcb.jpg?s=612x612&w=0&k=20&c=gbS2eMWy6WTrMMZBrRAgAx_UYgrEitK5DrnWbfnM5SE=",
    "Creador 21", "https://media.istockphoto.com/id/1472507642/es/foto/cgi-planetas-abstractos-que-descienden-a-la-tierra.jpg?s=612x612&w=0&k=20&c=xE2EWDQK3FpmAe2k9QvIpCsoqAmbWd5yKxZaGu7IBw0=",
    "Creador 22", "https://media.istockphoto.com/id/1470449208/es/foto/vista-a%C3%A9rea-de-un-complejo-residencial-con-casas-arco-iris-en-la-orilla-izquierda-de-kiev.jpg?s=612x612&w=0&k=20&c=bkMEw2U-jZau2pABKQukFj6BsuqPFRIAbrMHuoybwwQ=",
    "Creador 23", "https://media.istockphoto.com/id/1325124359/es/foto/%C3%A1rbol-vs-tr%C3%A1fico-concepto-de-entorno.jpg?s=612x612&w=0&k=20&c=m0TkFeDCEahQ7C97AuA0BzstTiwD83sgieJ_QDcGEHI=",
    "Creador 24", "https://media.istockphoto.com/id/1338726771/es/foto/pajas.jpg?s=612x612&w=0&k=20&c=RXpyx7TZW2RriP9ctvb7DZ2Zaq_K2Y6w8r-aA9YqS1s=",
    "Creador 25", "https://media.istockphoto.com/id/1339185146/es/vector/fondo-de-arco-iris-abstracto-brillante.jpg?s=612x612&w=0&k=20&c=-q7O8qpdWIveNlHqVRBKEs3tIMluMHuZS9gQvjXzW6U=",
    "Creador 26", "https://media.istockphoto.com/id/1396715400/es/foto/bandera-del-arco-iris-abstracto-mosaico-lgbtqia-mes-del-orgullo-evento-cultura-tri%C3%A1ngulo.jpg?s=612x612&w=0&k=20&c=WFz8GSa2U1BW2NiIWG1BfQWPhczS07e73dC_gM-tpWU=",
    "Creador 27", "https://media.istockphoto.com/id/1365849981/es/foto/vista-de-alto-%C3%A1ngulo-de-las-dunas-texturizadas-del-desierto-al-amanecer.jpg?s=612x612&w=0&k=20&c=Deel0ejewe1okVHFOw371EmUlrNyMBRHRSuBL1r5KDk=",
    "Creador 28", "https://media.istockphoto.com/id/1503943375/es/foto/ni%C3%B1a-vietnamita-con-vestido-blanco-tradicional-de-ao-dai-con-secado-de-incienso-al-aire-libre.jpg?s=612x612&w=0&k=20&c=32glXLQOmrf-bxeVyK520OF8kD5ZEYMkf1vxJwLAMBo=",
    "Creador 29", "https://media.istockphoto.com/id/1328325993/es/foto/tomates-tostados-cortados-variados-en-bandeja-de-horneado-con-albahaca-y-romero-macro.jpg?s=612x612&w=0&k=20&c=o5Rv9tIHAlkM0qPB31BvHbAGZd8cVdxEcwIMpeyDDTA=",
    "Creador 30", "https://media.istockphoto.com/id/1755286679/es/foto/cultivo-de-hongos-en-el-bosque.jpg?s=612x612&w=0&k=20&c=sXlEs2-IoL4I6TzOAlOjG5l2HidT1HxIBZyU5ccYTsU=",
    "Creador 31", "https://media.istockphoto.com/id/1753059830/es/foto/urban-tr%C3%A1fico.jpg?s=612x612&w=0&k=20&c=tNhY9oEQh4hxsnQxHcYS1kDIWMx_FiNuSXsopcKLi_c=",
    "Creador 32", "https://media.istockphoto.com/id/1276580714/es/foto/renderizado-en-3d-fondo-minimalista-abstracto-marco-cuadrado-de-luz-de-ne%C3%B3n-azul-rosa-con.jpg?s=612x612&w=0&k=20&c=UNage-g9yIyl12k6lU3FRMRocSsiSU_CVDjRM_Qtp5U=",
    "Creador 33", "https://media.istockphoto.com/id/1416449650/es/foto/paisaje-del-metaverso.jpg?s=612x612&w=0&k=20&c=HV8L3aWHHgAQAoGhdj_UKmdH3fx-8mCziZ2MNyaFufY=",
    "Creador 34", "https://media.istockphoto.com/id/1965039080/es/foto/vista-a%C3%A9rea-de-la-desembocadura-del-r%C3%ADo-isla-cristina-en-huelva-andaluc%C3%ADa-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=GTxaMBR9Kw6ejNWVe3aNPD8ulcmEYMBd4fHQb6KH-yg=",
    "Creador 35", "https://media.istockphoto.com/id/1328325993/es/foto/tomates-tostados-cortados-variados-en-bandeja-de-horneado-con-albahaca-y-romero-macro.jpg?s=612x612&w=0&k=20&c=o5Rv9tIHAlkM0qPB31BvHbAGZd8cVdxEcwIMpeyDDTA=",
    "Creador 36", "https://media.istockphoto.com/id/1869390184/es/foto/abstract-layered-and-folded-paper-background.jpg?s=612x612&w=0&k=20&c=sZPXSnZg5SN542kr-wwOfmOOpYhBeHcY4x5LIr0_kiQ=",
    "Creador 37", "https://media.istockphoto.com/id/1459757171/es/foto/mujer-mirando-pasar-el-metro.jpg?s=612x612&w=0&k=20&c=3UTDxNOffiKVZkLsedGiNB92tSklSv1L2ddvnbURH-o=",
    "Creador 38", "https://media.istockphoto.com/id/1464561797/es/foto/unidad-procesadora-de-inteligencia-artificial-potente-componente-quantum-ai-en-placa-base-pcb.jpg?s=612x612&w=0&k=20&c=gbS2eMWy6WTrMMZBrRAgAx_UYgrEitK5DrnWbfnM5SE=",
    "Creador 39", "https://media.istockphoto.com/id/1472507642/es/foto/cgi-planetas-abstractos-que-descienden-a-la-tierra.jpg?s=612x612&w=0&k=20&c=xE2EWDQK3FpmAe2k9QvIpCsoqAmbWd5yKxZaGu7IBw0=",
    "Creador 40", "https://media.istockphoto.com/id/1470449208/es/foto/vista-a%C3%A9rea-de-un-complejo-residencial-con-casas-arco-iris-en-la-orilla-izquierda-de-kiev.jpg?s=612x612&w=0&k=20&c=bkMEw2U-jZau2pABKQukFj6BsuqPFRIAbrMHuoybwwQ=",
    "Creador 41", "https://media.istockphoto.com/id/1325124359/es/foto/%C3%A1rbol-vs-tr%C3%A1fico-concepto-de-entorno.jpg?s=612x612&w=0&k=20&c=m0TkFeDCEahQ7C97AuA0BzstTiwD83sgieJ_QDcGEHI=",
    "Creador 42", "https://media.istockphoto.com/id/1338726771/es/foto/pajas.jpg?s=612x612&w=0&k=20&c=RXpyx7TZW2RriP9ctvb7DZ2Zaq_K2Y6w8r-aA9YqS1s=",
    "Creador 43", "https://media.istockphoto.com/id/1472507642/es/foto/cgi-planetas-abstractos-que-descienden-a-la-tierra.jpg?s=612x612&w=0&k=20&c=xE2EWDQK3FpmAe2k9QvIpCsoqAmbWd5yKxZaGu7IBw0=",
    "Creador 44", "https://media.istockphoto.com/id/1470449208/es/foto/vista-a%C3%A9rea-de-un-complejo-residencial-con-casas-arco-iris-en-la-orilla-izquierda-de-kiev.jpg?s=612x612&w=0&k=20&c=bkMEw2U-jZau2pABKQukFj6BsuqPFRIAbrMHuoybwwQ=",
    "Creador 45", "https://media.istockphoto.com/id/1325124359/es/foto/%C3%A1rbol-vs-tr%C3%A1fico-concepto-de-entorno.jpg?s=612x612&w=0&k=20&c=m0TkFeDCEahQ7C97AuA0BzstTiwD83sgieJ_QDcGEHI=",
    "Creador 46", "https://media.istockphoto.com/id/1338726771/es/foto/pajas.jpg?s=612x612&w=0&k=20&c=RXpyx7TZW2RriP9ctvb7DZ2Zaq_K2Y6w8r-aA9YqS1s=",
    "Creador 47", "https://media.istockphoto.com/id/1339185146/es/vector/fondo-de-arco-iris-abstracto-brillante.jpg?s=612x612&w=0&k=20&c=-q7O8qpdWIveNlHqVRBKEs3tIMluMHuZS9gQvjXzW6U=",
    "Creador 48", "https://media.istockphoto.com/id/1396715400/es/foto/bandera-del-arco-iris-abstracto-mosaico-lgbtqia-mes-del-orgullo-evento-cultura-tri%C3%A1ngulo.jpg?s=612x612&w=0&k=20&c=WFz8GSa2U1BW2NiIWG1BfQWPhczS07e73dC_gM-tpWU=",
    "Creador 49", "https://media.istockphoto.com/id/1365849981/es/foto/vista-de-alto-%C3%A1ngulo-de-las-dunas-texturizadas-del-desierto-al-amanecer.jpg?s=612x612&w=0&k=20&c=Deel0ejewe1okVHFOw371EmUlrNyMBRHRSuBL1r5KDk=",
    "Creador 50", "https://media.istockphoto.com/id/1503943375/es/foto/ni%C3%B1a-vietnamita-con-vestido-blanco-tradicional-de-ao-dai-con-secado-de-incienso-al-aire-libre.jpg?s=612x612&w=0&k=20&c=32glXLQOmrf-bxeVyK520OF8kD5ZEYMkf1vxJwLAMBo=",
    "Creador 51", "https://media.istockphoto.com/id/1328325993/es/foto/tomates-tostados-cortados-variados-en-bandeja-de-horneado-con-albahaca-y-romero-macro.jpg?s=612x612&w=0&k=20&c=o5Rv9tIHAlkM0qPB31BvHbAGZd8cVdxEcwIMpeyDDTA=",
    "Creador 52", "https://media.istockphoto.com/id/1755286679/es/foto/cultivo-de-hongos-en-el-bosque.jpg?s=612x612&w=0&k=20&c=sXlEs2-IoL4I6TzOAlOjG5l2HidT1HxIBZyU5ccYTsU=",
    "Creador 53", "https://media.istockphoto.com/id/1753059830/es/foto/urban-tr%C3%A1fico.jpg?s=612x612&w=0&k=20&c=tNhY9oEQh4hxsnQxHcYS1kDIWMx_FiNuSXsopcKLi_c=",
    "Creador 54", "https://media.istockphoto.com/id/1276580714/es/foto/renderizado-en-3d-fondo-minimalista-abstracto-marco-cuadrado-de-luz-de-ne%C3%B3n-azul-rosa-con.jpg?s=612x612&w=0&k=20&c=UNage-g9yIyl12k6lU3FRMRocSsiSU_CVDjRM_Qtp5U=",
    "Creador 55", "https://media.istockphoto.com/id/1416449650/es/foto/paisaje-del-metaverso.jpg?s=612x612&w=0&k=20&c=HV8L3aWHHgAQAoGhdj_UKmdH3fx-8mCziZ2MNyaFufY=",
    "Creador 56", "https://media.istockphoto.com/id/1965039080/es/foto/vista-a%C3%A9rea-de-la-desembocadura-del-r%C3%ADo-isla-cristina-en-huelva-andaluc%C3%ADa-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=GTxaMBR9Kw6ejNWVe3aNPD8ulcmEYMBd4fHQb6KH-yg=",
    "Creador 57", "https://media.istockphoto.com/id/1328325993/es/foto/tomates-tostados-cortados-variados-en-bandeja-de-horneado-con-albahaca-y-romero-macro.jpg?s=612x612&w=0&k=20&c=o5Rv9tIHAlkM0qPB31BvHbAGZd8cVdxEcwIMpeyDDTA=",
    "Creador 58", "https://media.istockphoto.com/id/1869390184/es/foto/abstract-layered-and-folded-paper-background.jpg?s=612x612&w=0&k=20&c=sZPXSnZg5SN542kr-wwOfmOOpYhBeHcY4x5LIr0_kiQ=",
    "Creador 59", "https://media.istockphoto.com/id/1483055684/es/vector/arte-del-metaverso.jpg?s=612x612&w=0&k=20&c=binA6e_t9OUcSZJduoU5a7fkGx6Y0AGzUijWsJPFclk=",
    "Creador 60", "https://media.istockphoto.com/id/1751231741/es/foto/lindo-cachorro-de-foca-mirando-a-la-c%C3%A1mara-mientras-flota-en-la-superficie-azul-clara-del.jpg?s=612x612&w=0&k=20&c=aFj1Utghh7Bj6Go1s8sPS3QyRYyIUIcc1GvBfD3ZArM=",
    "Creador 61", "https://media.istockphoto.com/id/2133135123/es/foto/t-l-aerial-view-rows-of-trucks-driving-in-harbor-with-trailers.jpg?s=612x612&w=0&k=20&c=BM3pHSR0gJ4PPBkX52_qp9Dkwp-SUmXHb6FX1vCMxCs=",
    "Creador 62", "https://media.istockphoto.com/id/1869390184/es/foto/abstract-layered-and-folded-paper-background.jpg?s=612x612&w=0&k=20&c=sZPXSnZg5SN542kr-wwOfmOOpYhBeHcY4x5LIr0_kiQ=",
    "Creador 63", "https://media.istockphoto.com/id/1965039080/es/foto/vista-a%C3%A9rea-de-la-desembocadura-del-r%C3%ADo-isla-cristina-en-huelva-andaluc%C3%ADa-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=GTxaMBR9Kw6ejNWVe3aNPD8ulcmEYMBd4fHQb6KH-yg=",
    "Creador 64", "https://media.istockphoto.com/id/1948463768/es/foto/vista-a%C3%A9rea-del-campamento-a-lo-largo-de-la-playa.jpg?s=612x612&w=0&k=20&c=5UL0-PMSRrzRvs1cNF5LHJ8KU8h3ENq3VFyCYFpdx7I=",
    "Creador 65", "https://media.istockphoto.com/id/1414801614/es/foto/taquillas-escolares-con-art%C3%ADculos-equipos-y-accesorios-para-la-educaci%C3%B3n-vuelta-al-cole.jpg?s=612x612&w=0&k=20&c=pKk-EZCY_iUAfUzwdfF0rp6YaaLVwTKyx5qMHtg-NQM=",
    "Creador 66", "https://media.istockphoto.com/id/1365849981/es/foto/vista-de-alto-%C3%A1ngulo-de-las-dunas-texturizadas-del-desierto-al-amanecer.jpg?s=612x612&w=0&k=20&c=Deel0ejewe1okVHFOw371EmUlrNyMBRHRSuBL1r5KDk=",
    "Creador 67", "https://media.istockphoto.com/id/1503943375/es/foto/ni%C3%B1a-vietnamita-con-vestido-blanco-tradicional-de-ao-dai-con-secado-de-incienso-al-aire-libre.jpg?s=612x612&w=0&k=20&c=32glXLQOmrf-bxeVyK520OF8kD5ZEYMkf1vxJwLAMBo=",
    "Creador 68", "https://media.istockphoto.com/id/1328325993/es/foto/tomates-tostados-cortados-variados-en-bandeja-de-horneado-con-albahaca-y-romero-macro.jpg?s=612x612&w=0&k=20&c=o5Rv9tIHAlkM0qPB31BvHbAGZd8cVdxEcwIMpeyDDTA=",
];

// let counter = 0;
// const photoQuantity = 4;

// function cargarContenido() {
//     const container = document.getElementById('container');
//     // Simulamos la carga de más contenido (divs)
//     for (let i = counter; i < counter + photoQuantity; i++) {
//         const item = container.appendChild(document.createElement("div"));
//         item.className = 'item';
//         const itemBox = item.appendChild(document.createElement("div"));
//         itemBox.className = 'itemBox';
//         const itemImg = itemBox.appendChild(document.createElement("img"));
//         itemImg.className = 'itemImg';
//         // Establecemos el src y el title basados en arrayNameImg
//         itemImg.src = arrayNameImg[i * 2 + 1];
//         itemImg.title = arrayNameImg[i * 2];
//     }
//     counter += photoQuantity;
// }

// window.addEventListener('scroll', function () {
//     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//     const scrolled = window.scrollY;
//     if (Math.ceil(scrolled) === scrollable) {
//         cargarContenido(); // Llamamos a la función para cargar más contenido
//     }
// });

// FUNCIÓN PARA HACER blur() Y focus() AL HACER :hover SOBRE ALGÚN ELEMENTO
function focusBlur(element) {
    element.addEventListener("mouseenter", function () {
        element.focus();
    });
    element.addEventListener("mouseleave", function () {
        element.blur();
    });
};