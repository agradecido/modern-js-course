/**
 *
 * Curso Javascript Moderno Udemy
 * https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/
 *
 * Unidad 9 - Funciones
 * 
 *    - Funcion Declaration: son las funciones normales.
 *    - Funcion Expression:  son las funciones que se asignan a una variable.
 * 
 *    - Hiosting: JavaScript lee el código dos veces, en la primera pasada eleva todas las declaraciones 
 *      a la cabecera. Eleva declaraciones, NO eleva inicializaciones.
 *      Es una pregunta de entrevista de trabajo.
 *
 */

// Function Declaration.
sumar(); // Hiosting Ok
function sumar() {
    console.log( 2 + 2 );
}

// Funcion Expression.
sumar2(); // Hiosting FAIL
const sumar2 = function() {
    console.log( 3 + 3 );
}

// Ejemplo Hiosting con inicializaciones
var x = 1; // Inicialización
console.log (x + " " + y); // Aquí y = undefined
var y = 2;
