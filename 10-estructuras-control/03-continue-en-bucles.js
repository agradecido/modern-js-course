/**
 *
 * Curso Javascript Moderno Udemy
 * https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/
 *
 * Unidad 10 - Estructuras de control
 *      81. break & continue
 *
 *      continue hace que el bucle salte a la siguiente iteración sin ejecutar el resto de la actual
 */

for (let index = 0; index < 10; index++) {
    if (index<5) {
        console.log ('Menor que 5:');
    } else {
        continue;
    }
    console.log (index);
}