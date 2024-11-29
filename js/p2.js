// Imágenes y descripciones
const imagenes = [
    { src: 'images/Pack.png', descripcion: 'Descripción del Proyecto: Haciendo uso del Cisco Packet Tracer hemos ido aprendiendo a menajarnos con switches y routers.' },
    { src: 'images/Vlans.png', descripcion: 'Descripción del Proyecto: Con las Vlans podemos hacer que los ordenadores no se puedan ver entre ellos.' },
    { src: 'images/Security.png', descripcion: 'Descripción del Proyecto: Con el port security podemos hacer que un switch solo acepte una mac-address de un ordenador en especifico.' }
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