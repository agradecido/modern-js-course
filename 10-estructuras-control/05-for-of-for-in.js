/**
 *
 * Curso Javascript Moderno Udemy
 * https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/
 *
 * Unidad 10 - Estructuras de control
 *      86. for of: trabaja con arrays
 *      87. for in: trabaja con objetos
 *
 */

const tareas = [ 'comer', 'estudiar', 'socializar', 'deporte'];

const automovil = {
    model: 'Celica',
    make: 'Toyota',
    year: 1989
}

for ( let tarea of tareas ) {
    //console.log ( tarea ) ;
}

for ( let propiedad in automovil ) {
    console.log ( `${propiedad} : ${automovil[propiedad]}` ) ;
}

for ( let [ key, value ] of Object.entries(automovil) ) {
    console.log ( key );
    console.log ( value );
}