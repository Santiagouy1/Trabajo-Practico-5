/*Solicita al usuario dos números y una operación (+, -, *, /) usando prompt. Muestra el
resultado de la operación en un alert. */

const num1 = parseFloat(prompt("Ingresa el primer número:"));
const num2 = parseFloat(prompt("Ingresa el segundo número:"));
const operacion = prompt("Ingresa la operación (+, -, *, /):");
let resultado;

if (operacion === "+") {
  resultado = num1 + num2;
} else if (operacion === "-") {
  resultado = num1 - num2;
} else if (operacion === "*") {
  resultado = num1 * num2;
} else if (operacion === "/") {
  resultado = num2 !== 0 ? num1 / num2 : "Error: División por cero";
} else {
  resultado = "Operación no válida";
}

alert(`El resultado es: ${resultado}`);


