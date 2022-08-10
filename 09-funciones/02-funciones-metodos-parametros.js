/**
 *
 * Curso Javascript Moderno Udemy
 * https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/
 *
 * Unidad 9 - Funciones
 *
 *    - Las diferencias entre funciones y métodos
 *    - Parámetros: para incrustarlos en un texto se hace así:
 *      `Este es el valor del parámetro: ${parametro}`
 *
 */

const numero1 = 20;
const numero2 = "20";

// Función
console.log ( parseInt (numero2) );

// Method
console.log ( numero1.toString() );

// Parámetros
/**
 * @param  {string} name
 * @param  {string} surname
 */
function saludar (name, surname) {
    console.log(`Hola ${name} ${surname}`);
}
saludar("Javi", "Sierra"); // Salida: Hola Javi Sierra
saludar(); // Salida: Hola undefined undefined

// Default parameters
function saludar2 (name="John", surname="Doe") {
    console.log(`Hola ${name} ${surname}`);
};
saludar2(); // Salida: Hola John Doe