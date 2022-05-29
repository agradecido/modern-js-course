/**
 *
 * Curso Javascript Moderno Udemy
 * https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/
 *
 * Unidad 10 - Estructuras de control
 *      78. Detener la ejecución de un if con una función
 *
 *      Para ello hay que meter el if dentro de una función, entonces cuando llega a return -> sale de la función.
 *
 */

detenerIfConReturn(110);

function detenerIfConReturn($valor) {
    if ($valor > 100) {
        console.log("Mayor que 100 y salgo");
        return;
    }
    if ($valor > 50) {
        console.log("Mayor que 50 y salgo");
        return;
    }
}
