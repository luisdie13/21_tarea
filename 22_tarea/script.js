/* Paso 1:
En lugar de fabricar robots individuales como lo hemos
estado haciendo, creemos una fábrica que funcione para
fabricar robots como queramos.

Crea una función de fábrica llamada robotFactory con
dos parámetros: model y mobile.
Haz que la función devuelva un objeto.
En el objeto, agrega una clave model con el valor del
parámetro model.
Agrega otra propiedad con una clave mobile con el valor del
parámetro mobile.

Luego, agrega un método llamado beep sin parámetros
que registrará 'Beep Boop' en la consola. */

function robotFactory(model, mobile) {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    };
  }

/* Paso 2:
Usa tu función de fábrica declarando una variable const
llamada tinCan.
Asígnale a tinCan el valor de la llamada a robotFactory
con el primer argumento 'P-500' y el segundo argumento true. */

const tinCan = robotFactory('P-500', true);

/* Paso 3:
Vamos a revisar lo que tinCan puede hacer.
Realiza una llamada a .beep() de tinCan.
¿Qué ves en la consola? */ 

tinCan.beep();