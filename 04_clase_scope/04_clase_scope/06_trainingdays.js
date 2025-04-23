/*    DÍAS DE ENTRENAMIENTO


Imaginemos que eres un maratonista experimentado.  Utilizas un servicio
llamado Días de entrenamiento que envía mensajes del evento al que
te has inscrito y los días que tienes para entrenar.

Los organizadores se han enterado de que eres un codificador y te han
pedido que les ayudes a resolver un problema: el programa actualmente utiliza
el ámbito incorrecto para sus variables.

Saben que esto puede ser problemático a medio que su servicio evoluciona.
En este proyecto, harás que Días de Entrenamiento sea más fácil de 
mantener y menos propenso a errores al corregir los ámbitos de las variables.

*/
//El siguiente programa no funciona
// EL scope de `random` es demasiado amplio
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope de `days` es demasiado limitado 
const getTrainingDays = event => {

  if (event === 'Marathon') {
    let days = 50;
  } else if (event === 'Triathlon') {
    let days = 100;
  } else if (event === 'Pentathlon') {
    let days = 200;
  }

  return days;
};

// El scope de`name` es demasiado limitado 
const logEvent = event => {
  const name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);

//Defina una variable `name`.
// Úsela como argumento después de actualizar logEvent y logTime


logEvent(event);
logTime(days);

/*TAREA 1

    Empecemos ejecutando el archivo trainingDays.js . En la consola podemos  
    ver que el programa no funciona.

    Lo ideal es que la función getRandEvent() seleccione un evento al azar.

    La función getTrainingDays() devuelve la cantidad de días de 
    entrenamiento en función del evento seleccionado. 
    
    Las funciones logEvent() y logTime() imprimen el nombre del atleta, 
    el evento y la cantidad de días en la consola.

    Pero las variables con un alcance inadecuado están causando errores.
    
    
TAREA 2

    Para evitar el ReferenceError, declare days dentro de 
    la  función getTrainingDays, antes de la declaración if.

TAREA 3

    Ejecute el programa nuevamente: no hay error, pero days es undefined!
    Las variables days se estan definiendo en el scope de cada declaración
    if/else if. 
   
    Elimine los tres let dentro de las declaraciones if/ else if.

TAREA 4

    Ejecute el programa de nuevo: arreglado! Ahora las declaraciónes 
    if/else if cambian el valor de days en lugar de definir un day nuevo.


HAGA QUE EL NOMBRE SEA GLOBAL

TAREA 5

Las funciones log -- logEvent() y logTime() -- utilizan la misma variable
name.  Parece haber un problema con el alcance (Observa el código y descubre
la cantidad de código duplicado) Además de las variables con un alcance dema-
siado amplio, el código duplicado puede indicar que una variable puede tener
un alcance demasiado estricto.

Evitemos esta repetición apregando name como pimer parámetro para
cada función.

Averigua ¿Por qué la variable name tiene una linea tachandola?


TAREA 6

Mueva la variable name al ámbito global.


TAREA 7

Pase name como primer argumento a logEvent() y logTime().

TAREA 8

Comprueba que el programa sigue funcionando.
Ejecútalo y comprueba el resultado.

TAREA 9

Pruebe las funciones de otro competidor.  Copia y pega este código
al final del archivo.

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);

TAREA 10

Ejecuta el programa.  Los eventos se asignan aleatoriamente, pero Naila
y Warren ejecutan los mismos eventos.

TAREA 11

Vemos que la variable ramdom está definida en el ámbito global.
Cada vez que se llama a getRandEvent se utiliza el mismo valor.

En la parte superior del archivo, mueva la variable random del
ámbito global al ámbito de bloque dentro de la función getRandEvent.

Felicitaciones "Días de Entenamiento" es más fácil de mantener y tiene menor
errores gracias a tu trabajo. 
Ejecuta el programa varias veces para asegurarte de que los resultados sean 
aleatorios.


*/