/* Paso 1:
Utiliza la asignación desestructurada para crear una
variable const llamada functionality, que extraiga la
propiedad functionality de robot. */

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};

const { functionality } = robot;

/* Paso 2:
Dado que functionality hace referencia a 
robot.functionality, podemos llamar a los métodos 
disponibles en robot.functionality simplemente a través de 
functionality.

Aprovecha este atajo y llama al método .beep() en 
functionality. */

functionality.beep();