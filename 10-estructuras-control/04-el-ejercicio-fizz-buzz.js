/**
 *
 * Curso Javascript Moderno Udemy
 * https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/
 *
 * Unidad 10 - Estructuras de control
 *      82. El ejercicio Fizz Buzz. Un clásico en las entrevistas de trabajo hace algunos años.
 *
 *      Enunciado:  Tenemos un budel 0 al 100. Los múltiplos de 3 tienen que imprimir FIZZ, los múltiplos de 5 BUZZ y
 *                  los múltiplos de 3 y 5 tiene que imprimir FIZZ BUZZ.
 *
 */

for (let i = 0; i <= 100; i++) {
    //if (i % 3 === 0 && i % 5 === 0) {
    if (i % 15 === 0) {
        console.log(`${i} Fizz Buzz!!!`);
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    }
}
