function worldTour (input){
let allStops = input.shift();
let line = input.shift();
while(line !== 'Travel'){
    let [command, first, second] = line.split(':')
    let startIndex;
    let finIndex;
    switch(command){
        case 'Add Stop':
        startIndex = first;
        let value = second;
        if (startIndex < 0 || startIndex >= allStops.length){
            console.log(allStops);
            break;
        }
        else
        {let firstPart = allStops.slice(0,startIndex);
        let secondPart = allStops.slice(startIndex);
        allStops = firstPart + value + secondPart;
        console.log(allStops)};
        break;
        case 'Remove Stop':
        startIndex = Number(first);
        finIndex = Number(second);
        if (!allStops[startIndex] || !allStops[finIndex]){
            console.log(allStops);
            break;
        }
        else{
            let result = allStops.substring(startIndex, finIndex + 1)
            allStops = allStops.replace(result, '');
            console.log(allStops);
        }
        break;
        case 'Switch':
        let newValue = second;
        let oldValue = first;
        allStops = allStops.replace(oldValue, newValue)
        console.log(allStops);
        break;
    }
    line = input.shift()
}
console.log(`Ready for world tour! Planned stops: ${allStops}`);
}
worldTour((["Hawai::Cyprys-Greece",

"Add Stop:7:Rome",

"Remove Stop:11:16",

"Switch:Hawai:Bulgaria",

"Travel"]))