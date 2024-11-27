/*

Define un objeto auto donde se especifiquen al menos 6 propiedades que lo conformen, si
se les ocurren más propiedades del número solicitado colocarlas. Mostrar el resultado en
un console log.

Hacer un document.write para mostrar un mensaje dinámico en base a 2
propiedades que hayan elegido, ejemplo:

document.write(`El auto objeto.propiedad1 es uno de los autos más potentes en el
mercado alcanzando una velocidad de object.propiedad2 por hora!`)

*/

const auto = {
    marca: 'Lamborghini',
    modelo: 'Huracan STO',
    potencia: '640CV',
    velocidadmaxima: '310Km/h',
    aceleracion: '0-100 Km/h en 3.0s',
    transmision: 'Caja de cambios Lamborghini de 7 velocidades con doble embrague',
    precio: 'USD 400.000'
}

console.log(auto)

document.write(`El ${auto.modelo} es uno de los lamborghini mas rapidos que existe alcanzando una velocidad punta de ${auto.velocidadmaxima} y teniendo una aceleracion de ${auto.aceleracion} con un precio aproximado de ${auto.precio}`)
