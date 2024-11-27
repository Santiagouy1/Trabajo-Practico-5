/* Calcular el área de un rectángulo: Pide al usuario la base y la altura de un rectángulo, y
muestra el área en la consola. */

const baseRectangulo = parseFloat(prompt('Base del rectángulo'));
const alturaRectangulo = parseFloat(prompt('Altura del rectángulo'));

const areaRectangulo = baseRectangulo * alturaRectangulo;

console.log(`El área del rectangulo es: ${areaRectangulo}`);