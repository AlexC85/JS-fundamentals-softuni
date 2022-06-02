function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    /*Every second lost game, his helmet is broken.  7, 2, 3, 4, 5 6

· Every third lost game, his sword is broken.

· When both his sword and helmet are broken in the same lost fight, his shield also breaks.

· Every second time, when his shield brakes, his armor also needs to be repaired.
*/
let helmet = 0;
let sword = 0;
let shield = 0;
let armor = 0;
let total = 0
helmet = Math.floor(lostFights / 2);
//total += helmet * helmetPrice;
sword = Math.floor(lostFights / 3);
//total += sword * swordPrice;
shield = Math.floor(lostFights / 6);
//total += shield * shieldPrice;
armor = Math.floor(lostFights / 12);
//total += armor * armorPrice;
total = (helmet * helmetPrice) + (sword * swordPrice) + (shield * shieldPrice) + (armor * armorPrice);
console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`)


}
gladiatorExpenses(7, 2, 3, 4, 5)
