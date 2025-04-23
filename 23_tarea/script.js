/*
Utiliza la abreviatura del valor de la propiedad y
refactoriza la función de fábrica en el siguiente
código: */

const robotFactory = (model, mobile) => {
    return {
        model, // Abreviatura para model: model
        mobile, // Abreviatura para mobile: mobile
        beep() {
            console.log('Beep Boop');
        }
    };
}
    
// Para comprobar que la técnica de abreviatura funcionó:
const newRobot = robotFactory('P-501', false);
console.log(newRobot.model);
console.log(newRobot.mobile);