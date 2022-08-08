function heroEnroll(input){
let heroes = new Map();
for (let el of input){
    let token = el.split(' ');
    let command = token.shift();
    let name = token.shift();
    let spellName = token.shift();
    switch (command){
        case 'Enroll':
        if(heroes.has(name)){
            console.log(`${name} is already enrolled.`);
        }
        heroes.set(name, undefined);
         break;
        case 'Learn':
        if (heroes.get(name) == spellName){
            console.log(`${name} has already learnt ${spellName}.`);
        }
        if (heroes.has(name)){
        heroes.set(name, +spellName)
        }
        else{
            console.log(`${name} doesn't exist.`);
        }break;
        case 'Unlearn':
        if (heroes.has(name)){
        if (heroes.get(name) == spellName){
            heroes.set(name, undefined)
        }
        else{
            console.log(`${name} doesn't know ${spellName}.`);
        }
        }
        else{
            console.log(`${name} doesn't exist.`);
        } break;
        case 'End': break;
        
    }
}
console.log('Heroes:');
for (let el of heroes){
    if (el.includes(undefined)){
        console.log(`== ${el[0]}:`);
    }
    else{
        console.log(`== ${el[0]}: ${el[1]}`);
    }
}
}


heroEnroll((["Enroll Stefan", 

"Enroll Peter", 

"Enroll Stefan", 

"Learn Stefan ItShouldWork",

"Learn Stefan ItShouldNotWork",

"Learn John ItShouldNotWork", 

"Unlearn George Dispel", 
 

"End"]))