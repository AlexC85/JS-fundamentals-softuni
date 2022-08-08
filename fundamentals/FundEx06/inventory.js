function inventory(input){
let heroes = [];
for(let el of input){
    let[name, level, items] = el.split(' / ');
    let hero = {
    name : name,
    level : +level,
    items : items
    }
    
    heroes.push(hero);
    
}
let sortedByLvl = heroes.sort((a, b) => {
    return a.level - b.level
})
for(let el of sortedByLvl){
    console.log(`Hero: ${el.name}`);
    console.log(`level => ${el.level}`);
    console.log(`items => ${el.items}`);
}
}
inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])