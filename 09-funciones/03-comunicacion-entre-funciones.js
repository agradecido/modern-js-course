/**
 *
 * Curso Javascript Moderno Udemy
 * https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/
 *
 * Unidad 9 - Funciones
 * 
 *  03. Comunicación entre funciones
 * 
 */

inciarApp();

function inciarApp() {
    console.log('Iniciando app...');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda función'); 
    usuarioAutenticado('Javi');
}

function usuarioAutenticado(name) {
    console.log('Autenticando usuario... Espere...');
    console.log(`Usuario autenticado exitosamente. ${name}`);
    
}
