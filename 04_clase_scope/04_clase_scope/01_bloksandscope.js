/*                         Blocks and Scope 

Antes de hablar acerca del scope(alcance). necesitamos hablar acerca de los
blocks.

Hemos visto el uso de bloques antes, en las funciones y las declaraciones if,

Un bloque es el código que encontramos dentro de un set de llaves { }.

Los bloques nos ayudan a agrupar una o más declaraciones y sirven como 
un marcador estructural importante para nuestro código.

Un bloque de código podría ser una función, como eso:

*/
const logSkyColor = () => {
    let color = 'blue';
    console.log(color); //blue
}

/*Tenga en cuenta que el cuerpo de la función es en realidad un bloque 
de código.

Observe el bloque de una declaración if */
let dusk = true;
if (dusk) {
    let color = 'pink';
    console.log(color);
}

/*Tarea 1: 
  Declara una variable const denominada city, ingresa el valor de
  'New York City'.  Esta variable existirá fuera del bloque*/

const city = 'New York City';

/*Tarea 2
  Debajo de la variable city, escribe una función llamada logCityShyline,
  dentro del cuerpo de la función de logCitySkyline(), escribe otra
  variable usando let y nombrala skyscraper y asignale elvalor de
  'Empire State Building.
   
  Dentro de la función, incluya una declaración de retorno como esta:
  return 'The stars over the ' + skyscraper + ' in ' + city;

  Debajo de la función logCitySkyline(), use console.log() para registrar 
  el valor de logCitySkyline() en la consola.
*/

  const logCitySkyline = () =>{
    let skyscraper = 'Empire State Building'; 
    return 'The stars over the ' + skyscraper + ' in ' + city;
  }
  console.log(logCitySkyline());

