/**
 *
 * Curso Javascript Moderno Udemy
 * https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/
 *
 * Unidad 9 - Funciones
 *
 *  04. Añadir funciones a un objeto
 *
 */

const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function () {
        console.log(`Pausando...`);
    },
    borrar: function (id) {
        console.log(`Borrando canción... ${id}`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}...`);
    },
}


// También se pueden declarar las funciones fuera de la 
// declaración del objeto
reproductor.borrar = function (id) {
    console.log(`Borrando canción... ${id}`);
}

reproductor.reproducir(20);
reproductor.pausar(20);
reproductor.borrar(20);
reproductor.crearPlaylist('Rock');