function dungenestDark(rooms){
let health = 100;
let coins = 0;
let arr = rooms[0].split('|');
let arrL = arr.length;
for (let i = 0; i < arrL; i++){
    let [item, a] = arr[i].split(' ');
    switch(item){
        case 'potion': health += Number(a);
        let left = 0;
        if (health > 100){
            left = health - 100;
            health = 100;
        }
        console.log(`You healed for ${a - left} hp.`);
        console.log(`Current health: ${health} hp.`); break;
        case 'chest': console.log(`You found ${a} coins.`); coins += Number(a); break;
        default: if (a >= health){
            console.log(`You died! Killed by ${item}.`);
            console.log(`Best room: ${i + 1}`);
            return;
        }
        else{
           console.log(`You slayed ${item}.`);
           health = health - Number(a);
        }
   
        
    }
}

console.log("You've made it!");
console.log(`Coins: ${coins}`);
console.log(`Health: ${health}`);
}

dungenestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])