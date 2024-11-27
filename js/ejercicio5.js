/*

Pide al usuario un número de minutos. Convierte ese valor a segundos y también a horas.
Muestra el resultado en un alert.

*/

let minutos = parseInt(prompt("Ingresa un número de minutos:"));

let segundos = minutos * 60;
let horas = minutos / 60;

alert(` 
    ${minutos} Minutos 
    ${segundos} Segundos 
    ${horas} Horas
    `);