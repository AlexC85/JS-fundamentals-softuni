function partyTime(input){
let vip = [];
let normal = [];
let isParty = false;
for (let el of input){
    if (el == 'PARTY'){
    isParty = true;
    continue;
    }
    let firstDigit = Number(el[0]);
    if (!isParty){
        if (isNaN(firstDigit)){
            normal.push(el)
        }
        else{
            vip.push(el)
        }
    }
    else{
        if (isNaN(firstDigit)){
            let index = normal.indexOf(el);
            normal.splice(index, 1);
        }
        else{
            let index = vip.indexOf(el);
            vip.splice(index, 1);
        }
    }
}
let size = vip.length + normal.length;
console.log(size);
for(el of vip){
    console.log(el);
}
for(el of normal){
    console.log(el);
}
}
partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])