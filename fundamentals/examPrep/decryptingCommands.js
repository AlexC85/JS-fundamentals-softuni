function decryptingCommands(input){
let string = input.shift();
for(let i = 0; i < input.length; i++){
    let [command, index1, index2] = input[i].split(' ');
    switch(command){
        case 'Replace': 
        string = string.replace(index1, index2);
        string = string.replace(index1, index2);
        string = string.replace(index1, index2);
        string = string.replace(index1, index2);
        string = string.replace(index1, index2);
        string = string.replace(index1, index2);
        string = string.replace(index1, index2);
        string = string.replace(index1, index2);
        string = string.replace(index1, index2);
        string = string.replace(index1, index2);
        console.log(string); break;
        case 'Cut':
        if (index1 < 0 || index2 > string.length){
            console.log('Invalid indices!');
        }
        else{
            let substring = string.substring(Number(index1), Number(index2) + 1);
            string = string.replace(substring, '')
            console.log(string);
        } break;
        case 'Make':
        if (index1 == 'Upper'){
            string = string.toUpperCase();
            console.log(string);
        }
        else{
            string = string.toLowerCase();
            console.log(string);
        }break;
        case 'Check': 
        if (string.includes(index1)){
            console.log(`Message contains ${index1}`);
        }
        else{
            console.log(`Message doesn't contain ${index1}`);
        }; break;
        case 'Sum':
        if(index1 < 0 || index2 < 0 || index1 > string.length || index2 > string.length){
        console.log('Invalid indices!');
        }
        else{  
        let sum = 0;
        let current = string.substring(index1, Number(index2) + 1);
        for (let el of current){
        sum += el.charCodeAt()
        }
        console.log(sum);}

    }
}
}
decryptingCommands((["ILikeSoftUni", 

"Replace I We", 

"Make Upper", 

"Check SoftUni", 

"Sum 1 4", 

"Cut 1 4", 

"Finish"]))