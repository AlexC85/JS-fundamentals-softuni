function schedule(input){
    let schedule = {};
for (let el of input){
    let token = el.split(' ');
    let day = token[0];
    let name = token[1];
    if (schedule.hasOwnProperty(day)){
        console.log(`Conflict on ${day}!`);
    }
    else {
        schedule [day] = name;
        console.log(`Scheduled for ${day}`);
    }
    
}
for (let key in schedule){
    console.log(`${key} -> ${schedule[key]}`);
}
}
schedule(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])