function makeADictionary(input){
    let result = [];
    for(let i = 0; i < input.length; i++){
        let arr = JSON.parse(input[i]);
        let keys = Object.keys(arr)
        result.push(arr)
        //console.log(`Term: ${keys} => Definition: ${arr[keys]}`);
        }
          
    }
        
        makeADictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    
    ])