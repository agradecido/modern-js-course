/**
 *
 * Curso Javascript Moderno Udemy
 * https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/
 *
 * Unidad 11 - Array Methods
 *      88 .some: comprueba si el valor existe en un objeto o en un Array
 *         .includes: comprueba si el valor existe en un Array
 *
 * Fijarse en las versiones cortas:
 * const existe_coche_corta = automovil.some( coche => coche.model === "308");
 * const existe_tarea_corta = tareas.includes("estudiar");
 *
 * Aprovecho para practicar las versiones largas y cortas de las arrow functions
 *
 */

const tareas = ["comer", "estudiar", "socializar", "deporte"];

const automovil = [
    {
        make: "Toyota",
        model: "Celica",
        year: 1989
    },
    {
        make: "Peugeot",
        model: "308",
        year: 2019
    }
];

/**
 * Comprobar si el valor existe en un OBJETO.
 */

// Arrow function long mode
const existe = automovil.some( coche => {
    return coche.model === "308";
});
// Arrow function short mode
const existe_corta = automovil.some( coche => coche.model === "308");
console.log (existe_corta);

/**
 * Comprobar si el valor existe en un ARRAY.
 * Se puede hacer de varias formas, la mejor es la corta.
 */

// 1. Forma larga
tareas.forEach((tarea) => {
    if (tarea === "estudiar") {
        console.log(tarea);
    }
});

// 2. Forma corta
const resultado = tareas.includes("estudiar");
console.log(resultado);

// 3. Con .some (.some sirve tanto para objetos como para Arrays)
const resultado_some = tareas.some( tarea => tarea === "estudiar");
console.log(resultado_some);

// 4. Ejercicio Auto evaluacion: Hacer la versión larga de esto último
const resultado_some_large_mode = tareas.some( tarea => {
    return tarea === "estudiar";
});
console.log (resultado_some_large_mode);