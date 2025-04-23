/*                   Ámbito de aplicación del bloque         

EL siguiente contexto que abordaremos es el ámbito de bloque.

Cuando una variable se define dentro deun bloque, solo es accesible para el
código que se encuentra entre llaves { }.

Decimos que la variable tiene ámbito de bloque porque solo es accesible
para las líneas de código dentre de ese bloque.

Las variables que se declaran con alcance de bloque se conocen como
VARIABLES LOCALES porque solo están disponibles para el código que
forma parte del mismo bloque.

El ámbito de bloque funciona así:*/

const logSkyColor = () => {
    let color = 'blue'; 
    console.log(color); // Prints "blue"
  };
  
  logSkyColor(); // Prints "blue"
  console.log(color); // throws a ReferenceError


  
/*
Notarás:

* Definimos una función logSkyColor().
* Dentro de la función, la variable color solo está disponible dentro de 
  las llaves de la función-
* Si intentamos registrar la misma variable fuera de la función, se 
  generará un error ReferenceError.*/

const logVisibleLightWaves = () => {
const lightWaves = "Moonlight";
console.log(lightWaves);
}

logVisibleLightWaves();
//console.log(lightWaves);

