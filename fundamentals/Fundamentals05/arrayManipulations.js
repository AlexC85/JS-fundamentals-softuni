function arrayManipulations(commands){
let arr = commands.shift().split(' ');
let comL = commands.length;
for (let i = 0; i < comL; i++){
let [action, firstNum, secondNum] = commands [i].split(' ');
switch(action){
case "Add" : arr.push(firstNum); break;
case 'Remove' : arr = arr.filter( x => x != firstNum); break;
case 'RemoveAt' : arr.splice(firstNum, 1); break;
case 'Insert' : arr.splice(secondNum, 0,firstNum); break;
}
}
console.log(arr.join(' '));
}
arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])