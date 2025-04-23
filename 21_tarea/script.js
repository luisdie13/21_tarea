/*En el código siguiente,
en robot hay un método getter, numOfSensors, pero no un 
método setter. 

¿Qué pasa si necesitamos agregar o eliminar sensores? 
Solucionemos ese problema.*/

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === 'number') {
        return this._numOfSensors;
        } else {
        return 'Sensors are currently down.';
        }
    },

    set numOfSensors(num) {
            if (typeof num === 'number' && num >= 0) {
                this._numOfSensors = num;
            } else {
                console.log('Pass in a number that is greater than or equal to 0')
            }
    }

};


/*Paso 1:
  Agregue un método setter llamado numOfSensors con la palabra
  clave set. Proporcione un parámetro de num. 
  Deje el cuerpo de la función vacío por ahora. */
  
/*Paso 2:
  Hay un par de cosas que debemos hacer en el método setter:
  
  - Agregue una verificación para ver si num es un número 
    usando el operador typeof.
  - num también debe ser mayor o igual a 0.
  - Si se cumplen ambas condiciones, reasignar 
    this._numOfSensors a num. */
  
/*Paso 3:
  Ahora agregue un else que registre 
  'Pass in a number that is greater than or equal to 0'
  en la consola. */
  
/*Paso 4:
  Utilice el método setter numOfSensors para asignar 
  robot._numOfSensors a 100.*/
  
robot._numOfSensors = 100;

/*Paso 5:
  Para comprobar que el método setter funcionó, 
  registre console.log(robot.numOfSensors).*/

console.log(robot.numOfSensors);