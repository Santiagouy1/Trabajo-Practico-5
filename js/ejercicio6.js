/*

Calcular el IVA de un producto
Solicita al usuario el precio de un producto en dolares y su precio final a pesos (1dolar =
$1130), además tenemos que sumarle el IVA (21%). Muestra el precio total en un alert.

*/

const precioDolar = +prompt(`Ingresa el precio del producto en dolares`)

const cambio = 1130
let precioPesos = precioDolar * cambio

const iva = precioPesos * 0.21
let precioFinal = precioPesos + iva

alert(`El precio final del producto es: $${precioFinal} pesos.`);