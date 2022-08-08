function maxNumber(arr) {
    let newArr = [];
    let number = 0;
    let number1 = 0;
    let arrLength = arr.length;
    let isBiggest = true;
    for(let i = 0; i < arrLength; i++){
        isBiggest = true
        number = arr[i];
        
        for (let j = i + 1; j < arrLength; j++){
            number1 = arr[j];
            if (number <= number1){
                isBiggest = false;
                break;
            }
            
        }
        if(isBiggest){
            newArr.push(arr[i])

        }
        
    }
    console.log(newArr.join(' '));
}


maxNumber([41, 41, 34, 20])