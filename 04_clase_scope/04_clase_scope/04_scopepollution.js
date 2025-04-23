/*               Contaminación del alcance               

Puede parecer una gran idea hacer siempre que sus variables accesibles
desde cualquier parte del programa.

Cuando declaras variables globales, estas van al ESPACIO DE NOMBRE GLOBAL.

El ESPACIO DE NOMBRES GLOBAL permite que las variables sean accesibles
desde cualquier parte del programa.

Esta variables permanece allí hasta que el programa termina, lo que significa
que nuestro espacio de nombres global puede llenarse muy rápiso.

La contaminación del ámbito se produce cuando tenemos demasiadas variables
globales que existen en el espacio de nombres global o cuando reutilizamos
variables en distintos ámbitos.

La contaminación del ámbito dificulta el seguimiento de nuestras distinta
variables y sets (conjuntos: es un objeto especial que almacena valores únicos
sin una clave), nos exponemos a posibles accidentes.

Por ejemplo, las variables de alcance global pueden colisionar con 
otras variables de alcance más local, lo que provoca un comportamiento
inesperado en nuestro código.

Veamos un ejemplo de contaminación del alcance en la práctica para que 
sepamos cómo evitarla:
*/

let num = 50;

const logNum = () => {
    num = 100; //Toma nota de esta línea de código
    console.log(num);
};

logNum(); //Muestra 100
console.log(num); //Muestra 100

/*Notarás:

* Tenemos una variable num.
* Dentro del cuerpo de la función de logNum(), queremos declarar una
  variable pero olvidamos usar la palabra clave let.
* Cuando llamamos logNum(), num se reasigna a 100.
* La reasignación interna logNum() afecta a la variable global num.
* Aunque se permite la reasignación y no obtendremos ningún error, si
  decidimos usat a num más tarde, sin saberlo usaremos el nuevo valor de num.
  
Si bien es importante saber qué es el alcance global, se recomienda no definir
variables en el alcance global.*/

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);//observa que a la variable global stars se le reasignó
                   //a Sirius Notarás que la variable global stars se 
                   // reasignó a 'Sirius'. En otras palabras, cambiamos el 
                   // valor de la starsvariable global, pero no es fácil 
                   // leer qué sucedió exactamente. 
                   // Esta es una mala práctica en el mantenimiento del 
                   // código y podría afectar nuestro programa de maneras 
                   // que no deseamos.