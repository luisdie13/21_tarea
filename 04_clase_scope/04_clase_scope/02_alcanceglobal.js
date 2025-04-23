/*                     Global Scope            

El Scope(alcance) es el contexto en el cual nuestras variables se
declaran.

Pensamos en el alcance en relación con los bloques porque las variables
pueden existir fuera o dentro de estos bloques.

En el ámbito global, las variables se declaran fuera de los bloques.  Estas
variables se denominan variablesglobales.  Debido aque las variables
globales no están vinculadas dentro de un bloque, cualuier código del
programa puede acceder a ellas, incluido el código de los bloques.

Veamos un ejemplo de alcance global:
*/
const color = 'blue';

const returnSkyColor = () => {
    return color; // blue
};

console.log(returnSkyColor()); // blue

/*Aunque la variable color se define fuera del bloque, se puede
  acceder a ella en el bloque de una función,lo que le otorga un
  alcance global.
  
  A su vez, se puede acceder a color dentro del bloque de la funcón
  returnSkyColor.
  
  Vamos a trabajar con variables globales para ver como los datos pueden
  ser accesibles desde cualquier parte del programa*/

let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;

console.log(callMyNightSky());