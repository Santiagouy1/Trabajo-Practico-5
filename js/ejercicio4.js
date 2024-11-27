/*

Pide al usuario dos valores y muestra cómo se intercambian entre sí. Por ejemplo, si ingresa
a=5 y b=10, el resultado será a=10 y b=5. Los resultados se deben mostrar con un
document.write
donde se muestre si el user ingreso a=5 y b=10:
a = 10
B = 5 

*/

let valor1 = +prompt("Eliga un valor");
let valor2 = +prompt("Eliga otro valor");

document.write("Valores originales: <br>");
document.write("valor1 = " + valor1 + "<br>");
document.write("valor2 = " + valor2 + "<br><br>");

let temp = valor1;
valor1 = valor2;
valor2 = temp;

document.write("Valores intercambiados: <br>");
document.write("valor1 = " + valor1 + "<br>");
document.write("valor2 = " + valor2 + "<br>");
