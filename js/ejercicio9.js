/* 

Películas o series para ver
Define un array miListaDePendientes con títulos de cuatro películas o series que quieres
ver.
• Usa el método push para agregar una quitan película.
• Modifica el nombre de la 2da película del array por una nueva.
• Muestra el array actualizado por consola. 

*/

const miListaDePendientes = [
    'Peaky blinders',
    'Iron Man',
    'Modern family',
    'Grays anatomy',
]

miListaDePendientes.push('Moana 2')

miListaDePendientes[1] = 'Iron Man 2'

miListaDePendientes.forEach(item => console.log(item));
