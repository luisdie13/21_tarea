/*Charla Marina

Observa la frase "Trementina y tortugas", ahora traducela a su
equivalente en el lenguaje marino: "UUEEIEEAUUEE".

Las reglas para traducir texto al lenguaje marino es:

1. No hay consonantes, solo vocales, excepto la "y".
2. Las u y las e son extra largas, por lo que debemos duplicarlas en  
   nuestro programa.

Una vez que hemos convertido el texto al lenguaje marino, el lenguaje se
canta lentamente, como es costumbre en el océano.

Para lograr esta traducción, podemos utilizar nuestro conocimiento
sobre bucles.

Tarea 1:
Crea una variable con el nombre input, para almacenar la frase que quieras.*/

const input = ["frase"];

/*Tarea 2:
En el mar, aparte que la vida es más sabrosa, solo hablan con las vocales 
“a”, “e”, “i”, “o” y “u”. Con estas letras minúsculas, crea una matriz 
llamada vowels. Esta matriz no se actualizará, así que asegúrate de elegir 
la palabra clave de declaración adecuada.*/

const vowels = ["a", "e", "i", "o", "u"];

/*Tarea 3:
Crea una variable llamada resultArrayy configúrala como una 
matriz vacía: []. Esto servirá como lugar para almacenar las vocales de 
la cadena input.*/

const resultArray = [];

/*Tarea 4:
Crea un bucle para recorrer cada letra de la variable input. 
En un paso posterior, compararemos cada letra con nuestra matriz vowels.*/

const input = ["frase"];
const vowels = ["a", "e", "i", "o", "u"];
const cadena = input[0];

for (let i = 0; i < cadena.length; i++) {
    const letra = cadena[i];
  if (vowels.includes(letra)) {
    console.log(`${letra} es una vocal`);
  } else {
    console.log(`${letra} no es una vocal`);
  }
}

/*Tarea 5:
Para comprobar tu trabajo, registra la posición numerada del iterador 
dentro del bucle for y ejecuta tu código. Esto debería contar la cantidad 
de caracteres en tu cadena input.
Comenta el código cuando hayas comprobado su buen funcionamiento.

Tarea 6:
Crea un bucle for anidado dentro del bucle for que acabas de escribir. 
Haz que el bucle interno recorra la matriz vowels cada vez que se ejecute 
el bucle externo.

Esto le permitirá comprobar cada letra input con todos los elementos vowels 
durante cada iteración.

Tarea 7:
Para comprobar tu trabajo, registra las posiciones del número de iteradores 
dentro del forbucle interno y ejecuta tu código. 
Deberías ver 0 hasta 4 repetidamente porque vowels tiene 5 elementos.

Tarea 8:
Dentro del segundo for loop, escribe un bloque de código que compare
las letras ingresadas en input y la matriz vowels.
Para revisar que todo funcione correctamente, muestra en pantalla
las coincidencias de letras.

Tarea 9:
Ahora, en lugar de simplemente mostrar las letras, agréguelas a 
la matriz de resultados.
Para comprobar su trabajo, utiliza console.log() para mostrar resultArray.
Las letras que registró en la consola en el paso 8 deberián estar
incluidas en su archivo resultArray.

Tarea 10:
En el mar se duplican las e y las u.
Escribe una declarción if que verifique si cada letra de la cadena 
input es igual a 'e'.  Si es así, utiliza el método push() para agregar
input[i] a resultArray.
Esta declaración debe estar antes del bucle for interno, dentro del
bucle for externo.  Esto se debe a que solo desea realizar esta
verificación una vez por cada letra del input.

Tarea 11:
A continuación duplica la u.

Tarea 12:
En la parte inferior del programa, registre el resultArray en la consola.

Tarea 13:
Coloca en mayúsculas la matriz resultArray y  juntalos como una cadena.
Declara una variable resultString que une nuestro trabajo en resultArray
en una sola cadena y pone en mayúsculas todas las letras.

Tarea 14:
Ingresa la frase "Ya Doli con el padre han encontrado a su querido hijo",
la traducción debería ser: AOIOEEAAEEOAOAUUUUEEIOIO

Tarea 15:
Si has obtenido la respuesta, copia tu código en una IA y pregunta
por mejoras, mejorar la legibilidad, hacerlo más eficiente...*/







const spellingWord = 'hipopotamo';
for (const letter of spellingWord) {
    console.log(letter);
}




const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];
for (const pokemon of pokemonList) {
    if (pokemon === 'Yoshi') {
        continue;
    }
    console.log(`¡Atrapaste un ${pokemon}!`);
}



let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

function greenEnergy(obj) {
    obj['Fuel Type'] = 'avocado oil';
}

greenEnergy(spaceship);
console.log(spaceship);