/**
 *
 * Curso Javascript Moderno Udemy
 * https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/
 *
 * Unidad 9 - Funciones
 *
 *  06. Foreach y map con Arrow functions
 *      - Son lo mismo, pero map crea un array nuevo, foreach solo recorre y ejecuta
 * 
 * 
 */

const carrito = [
    { nombre: "Raqueta Wilson Blade 104", precio: 196 },
    { nombre: "Camiseta tenis Artengo", precio: 12 },
    { nombre: "Overgrip Head Blue", precio: 9 },
    { nombre: "Toalla XS", precio: 2.4 }
]

// Forma clásica
carrito.forEach( function(producto) {
    //console.log ( producto.nombre );
    //console.log ( producto.precio );
})
// Forma clásica con map
carrito.map( function(producto) {
    //console.log ( producto.nombre );
    //console.log ( producto.precio );
})
// Lo mismo con declaración como Funcion Expression
const nuevoArray = carrito.map( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
});
carrito.forEach( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

// Lo mismo con Arrow Functions
const nuevoArrayArrow = carrito.map ( (producto) => `${producto.nombre} - Precio: ${producto.precio}` );
carrito.forEach( (producto) => `${producto.nombre} - Precio: ${producto.precio}` );

console.log( nuevoArrayArrow );


