/**
 *
 * Curso Javascript Moderno Udemy
 * https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/
 *
 * Unidad 9 - Funciones
 *
 *  07. Arrow Functions con objetos
 *
 */

// Con Arrow Functions
const reproductorArrow = {
    cancion: '',
    reproducir: (id) => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log(`Pausando...`),
    borrar: id => console.log(`Borrando canción... ${id}`),
    crearPlaylist: nombre => console.log(`Creando la playlist: ${nombre}...`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist: ${nombre}...`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log (`Añadiendo ${this.cancion}...`);
    },
    get obtenerCancion() {
        console.log (`${this.cancion}`);
    }
};

reproductorArrow.nuevaCancion = 'Maneras de vivir';
reproductorArrow.obtenerCancion; // Como es un get no es necesario poner los ()

// Forma clásica
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
    crearPlaylist: function (nombre) {
        console.log(`Creando la playlist: ${nombre}...`);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}...`);
    },
};


// También se pueden declarar las funciones fuera de la
// declaración del objeto
reproductor.borrar = function (id) {
    console.log(`Borrando canción... ${id}`);
};

/*
reproductor.reproducir(20);
reproductorArrow.reproducir(20);
reproductor.pausar(20);
reproductorArrow.pausar(20);
reproductor.borrar(20);
reproductorArrow.borrar(20);
reproductor.crearPlaylist("Rock");
reproductorArrow.crearPlaylist("Rock");
*/
