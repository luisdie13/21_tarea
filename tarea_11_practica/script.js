/*Utilice la propiedad .lenght para encontrar el ultimo elemento de una matriz*/

let myArray = [1, 2, 3, 4, 5];
let ultimoElemento = miArray[miArray.length - 1]; // Accedemos al último elemento usando length
console.log(ultimoElemento); // Imprime 5

//Utilice otros métodos en la documentación de MDN que no se mencionan en la lección.

//Tome todos los elementos de una matriz y cree una cadena.

let miArray = ["Manzana", "Banana", "Cereza"];
let cadena = miArray.join(", "); // Une con comas y espacios
console.log(cadena); // Imprime "Manzana, Banana, Cereza"

//Encuentra el valor de retorno de una llamada .push() a una matriz

let theArray = [1, 2, 3];
let nuevaLongitud = miArray.push(4, 5); // Añade 4 y 5
console.log(nuevaLongitud); // Imprime 5
console.log(miArray); // Imprime [1, 2, 3, 4, 5]

//Anidar una matriz dentro de una matriz

let arrayPrincipal = [1, 2, [3, 4, 5], 6]; // El tercer elemento es otro array
console.log(arrayPrincipal); // Imprime [1, 2, [3, 4, 5], 6]

//Acceder a un elemento de la matriz anidada

let arrayPrincipal2 = [1, 2, [3, 4, 5], 6];
let elementoAnidado = arrayPrincipal[2][1]; // Accede al segundo elemento del array anidado (4)
console.log(elementoAnidado); // Imprime 4