// Imágenes y descripciones
const imagenes = [
    { src: 'images/Proyecto1.png', descripcion: 'Descripción del Proyecto: Gracías al VirtualBox hemos instalado diversos sistemas operativos en un mismo oredador, a su vez cada una de estas VM puede tener mas de un sistema operativo dentro de el.' },
    { src: 'images/WindowsS.png', descripcion: 'Descripción del Proyecto: Con el sistema operativo de Windows Server estamos aprendiendo ha hacer controles de seguridad y backcups.' },
    { src: 'images/Ubuntu.png', descripcion: 'Descripción del Proyecto: Hemos tenido que crear una maquina Ubntu en la cual hemos ido aprendiendo ha hacer uso de los comando que usa dicho sistema operativo.' }
];

let indiceActual = 0;  // Índice de la imagen actual

// Función para cambiar la imagen y el texto
function cambiarImagen(direccion) {
    indiceActual += direccion;

    // Si se sale del rango, volvemos al inicio o al final
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    } else if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }

    // Actualizar la imagen
    document.getElementById('imagen-proyecto').src = imagenes[indiceActual].src;

    // Actualizar la descripción del proyecto
    document.getElementById('descripcion-texto').innerText = imagenes[indiceActual].descripcion;
}