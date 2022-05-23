/**
 *
 * Curso Javascript Moderno Udemy
 * https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/
 *
 * Unidad 10 - Estructuras de control
 *
 *      01. If then else (obviamos)
 *      02. Comparador estricto: compara el tipo de dato también, además del valor
 *      03. >, <, >=, <=
 *      04. else if
 *      05. switch
 *      06. &&, ||
 *      07. Detener un if con una función: para detener un if con return tenemos que meter
 *          el if dentro de una función
 *      08. Operador ternario. Es un if en una sola línea
 *          if anidado dentro de un ternario
 *
 */

const numero = 1000;
const numeroString = "1000";

console.log(typeof numero);
console.log(typeof numeroString);

// == operador no estricto
if (numero == "1000") {
    console.log("Es igual a 1000 ");
}

// === operador estricto
if (numero === "1000") {
    console.log("Es igual a 1000 ");
} else {
    console.log("No es igual a 1000 ");
}

if (numeroString === "1000") {
    console.log("Es igual a 1000");
} else {
    console.log("No es igual a 1000");
}

// switch
const metodoPago = "Paypal";
switch (metodoPago) {
    case "Efectivo":
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case "Tarjeta":
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default: 
        console.log("Método de pago no soportado");
        break;
} 

// Operador ternario
const autenticado = true;
const puedePagar = true;
console.log ( autenticado ? "Sí está autenticado" : "No está autenticado" );
console.log ( autenticado || puedePagar ? "Sí puede pagar" : "No puede pagar" );
// if anidados con operador ternario
console.log ( autenticado ? puedePagar ? "Sí está autenticado" : "Sí autenticado, no puede pagar" : "No está autenticado" );