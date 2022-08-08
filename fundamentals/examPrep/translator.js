function translator(input){
let numberOfCommands = Number(input.shift());
for (let i = 0; i < numberOfCommands; i++){
    let isValid = true;
    if (!input[i].includes(':')){
    console.log('The message is invalid');
    continue;
    }
    let [command, text] = input[i].split(':')
    let commandAsArr = command.split('')
    let start = commandAsArr.shift();
    let fin = commandAsArr.pop();
    if (start !== '!' || fin !== '!'){
        console.log('The message is invalid');
        continue;
    }
    else if(commandAsArr[0] !== commandAsArr[0].toUpperCase()){
        console.log('The message is invalid');
        continue;
    }
    else if(commandAsArr.length < 4){
        console.log('The message is invalid');
        continue;
    }
    for (let i = 1; i < commandAsArr.length; i++){
        if (commandAsArr[i].toLowerCase() !== commandAsArr[i]){
            console.log('The message is invalid');
            continue;
        }
    }
    let textAsArr = text.split('')
    let nachalo = textAsArr.shift();
    let krai = textAsArr.pop();
    if (nachalo !== '[' || krai !== ']'){
    console.log('The message is invalid');
    continue;
    }
    else if(textAsArr.length < 9){
        console.log('The message is invalid');
        continue;
    }
    let resArr = []
    for(let el of textAsArr){
    el = el.charCodeAt();
    resArr.push(el)
    if ((el >= 65 && el <= 90) || (el >= 97 & el <= 122)){
    }
    else {
        console.log('The message is invalid');
        isValid = false;
        continue;
        
    }
    }
    if(isValid == true){
   console.log(`${commandAsArr.join('')}: ${resArr.join(' ')}`); 
    }  
}
}
translator((["2", 

"!Send!:[Ivanis5ere]", 

"*Time@:[Itis5amAlready"]))