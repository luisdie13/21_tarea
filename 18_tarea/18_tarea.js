/*Utiliza el siguiente cÃ³digo:*/

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 


/*Paso 1:

Usando for...in, itere a travÃ©s del objeto spaceship.crew en el editor 
de cÃ³digo y obtenga console.log() una lista de roles y nombres de la 
tripulaciÃ³n en el siguiente formato: 
'[crew member's role]: [crew member's name]', 
por ejemplo, 'chief officer: Dan'. */

for (let role in spaceship.crew) {
    console.log(`${role}: ${spaceship.crew[role].name}`);
}

/*Paso 2:
Usando for...in, itere a travÃ©s del objeto spaceship.crew en el editor de 
cÃ³digo y obtenga console.log() una lista de nombres y grados de la 
tripulaciÃ³n en el siguiente formato: 
'[crew member's name]: [crew member's degree]', 
es decir, 'Lily: Computer Engineering'.

*/

for (let role in spaceship.crew) {
    const crewMember = spaceship.crew[role];
    console.log(`${crewMember.name}: ${crewMember.degree}`);
}