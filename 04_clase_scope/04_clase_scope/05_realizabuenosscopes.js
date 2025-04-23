
/*               Practique Buenos Alcances     

Dados los deafíos que plantea las variable globales y la contaminación del 
alcance, debemos seguir las mejores prácticas para delimitar nuestras 
variables lo más estrictamente posible utilizando el alcance del bloque.

Limitar estrictamente sus variables mejorará enormemente su código
de varias manera:

*  Hará que su código sea más legible ya que los bloques organizarán su
   código en secciones discretas.

* Hace que su código sea más comprensible ya que aclara qué variables están
  asociadas con diferentes partes del programa en lugar de tener que
  realizar un seguimiento de ellas línea tras línea.

* Es más fácil mantener código, ya que su código será modular.

* Ahorrará memoria en su código porque dejará de existir después de que
  el bloue termine de ejecutarse.

A continuación se muestra otro ejemplo de cómo funciona el alcance del
bloque, tal como se define dentro de un bloque if:
 */
const logSkyColor = () => {
    const dusk = true;
    let color = 'blue'; 
    if (dusk) {
      let color = 'pink';
      console.log(color); // Prints "pink"
    }
    console.log(color); // Prints "blue"
  };
  
//  console.log(color); // throws a ReferenceError
  
/*
Si bien utilizamos el ámbito de bloque, seguimos contaminando nuestro 
espacio de nombres al reutilizar el mismo nombre de variable dos veces. 
Una mejor práctica sería cambiar el nombre de la variable dentro del bloque.
 */

/*
El ámbito de bloque es una herramienta poderosa en JavaScript, ya que nos 
permite definir variables con precisión y no contaminar el espacio de 
nombres global. Si una variable no necesita existir fuera de un bloque, 
¡no debería! 
*/
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if(region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);

  }
  
  console.log(lightWaves);
};

logVisibleLightWaves();

