function piccolo(input){
    let parking = {};
    for (let el of input){
        let [isItIn, carNumber] = el.split(', ');
            parking[carNumber] = isItIn;
        if (parking[carNumber] == 'OUT'){
            delete parking[carNumber]
        }
    }
    let entries = Object.entries(parking);
    let sorted = entries.sort(([a], [b]) => {
        return a.localeCompare(b);
    })
    for (let el of sorted){
        console.log(el[0]);
    }

}
piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])