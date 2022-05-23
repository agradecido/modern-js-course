/**
 *
 * Curso Javascript Moderno Udemy
 * https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/
 *
 * Unidad 9 - Funciones
 *
 *  05. Arrow functions
 *      - Se sustituye function() por =>().
 *      - Se pueden quitar las llaves si solo tenemos una línea
 * 
 *  05.02 Parámetros en Arrow Functions
 *      - Si solo va un parámetro se pueden quitar los ()
 *
 */

const aprendiendo = function() {
    console.log ('Aprendiendo JavaScript')
}

const aprendiendo2 = () => {
    console.log ('Aprendiendo Arrow Functions');
}

const aprendiendo3 = () => console.log ('Aprendiendo Arrow Functions');

//05.02 Parámetros
const aprendiendo4 = (materia) => console.log('JavaScript');
const aprendiendo5 = materia => console.log('JavaScript');
aprendiendo4();
aprendiendo5();
// Con más de un parámetro SÍ hay que poner los () 
const aprendiendo6 = (materia1, materia2) => console.log(`Aprendiendo ${materia1} y ${materia2}`);
aprendiendo6('Js', 'Arrow Functions');