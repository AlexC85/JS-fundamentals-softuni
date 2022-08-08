function cardGame(input){
let players = new Map();
let enumCardPower = {
    '2': 2,
    '3': 3,
    '4': 4,  
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
};
let enumCardType = {
    'S': 4,
    'H': 3,
    'D': 2,
    'C': 1
}
for (let el of input){
    let tokens = el.split(': ');
    let name = tokens.shift();
    let cardsString = tokens.shift();
    let cardsArr = cardsString.split(', ')
   if (!players.has(name)){
    players.set(name, new Set());
   }
   for (let cards of cardsArr){
    players.get(name).add(cards);
   }
}
for (let [key, value] of players){

let sum = 0;
for(let card of value){
let cardInfo = card.split('')
let cardType = cardInfo.pop();
let cardPower = cardInfo.join('')
//console.log(cardPower);
let cardPowerAsNumber = enumCardPower[cardPower];

let cardTypeAsNumber = Number(enumCardType[cardType]);
sum += Number(cardPowerAsNumber * cardTypeAsNumber);

}
console.log(key +': ' + sum);
}

}   
cardGame([

    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ])