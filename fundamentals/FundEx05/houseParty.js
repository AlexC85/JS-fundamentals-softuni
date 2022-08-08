function houseParty(arr){
let guestList = [];
for (let el of arr){
    let name = el.split(' ')[0];
    if (el.split(' ').length < 4){
        if(guestList.includes(name)){
             console.log(`${name} is already in the list!`);
        }
        else{
             guestList.push(name);
        }
        }
    else{
        if(!guestList.includes(name)){
            console.log(`${name} is not in the list!`);
        }
        else{
            let index = guestList.indexOf(name);
            guestList.splice(index, 1);
        }
    }
    
}
console.log(guestList.join(`\n`));

}
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])