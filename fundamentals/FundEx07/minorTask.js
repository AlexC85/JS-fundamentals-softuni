function minorTask(input){
    let arrL = input.length;
    let result = {};
    for (let i = 0; i < arrL; i+=2){
        if (!result.hasOwnProperty(input[i])){
        result [input[i]] = (Number(input[i + 1]))
        }
        else{
            result[input[i]] += (Number(input[i+1]))
        }   
    }
    for (let keys in result){
        console.log(keys + ' -> ' + result[keys]);
    }
    }
minorTask([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17'
    
    ])