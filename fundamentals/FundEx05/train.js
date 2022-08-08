function train(arr){
let wagon = arr.shift().split(' ').map(Number);
let maxCapacity = Number(arr.shift());
for (let i = 0; i < arr.length; i++){
    let command = arr[i].split(' ');
    if (command.length > 1){
        wagon.push(Number(command[1]));
    }
    else {
        for(let j = 0; j < wagon.length; j++){
        if (Number(wagon[j]) + Number(command[0]) <= maxCapacity){
            wagon[j] += Number(command[0])
            break;
        }
        }
    }
}
console.log(wagon.join(' '));
}
train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75'])