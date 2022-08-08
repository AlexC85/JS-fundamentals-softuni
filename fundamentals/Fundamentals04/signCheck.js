function signCheck(numOne, numTwo, numThree) {
    let counter = 0
    let arr = [numOne, numTwo, numThree];
    for (let element of arr){
        if (element < 0){
            counter++;
        }
    }
    if (counter == 2 || counter == 0){
    console.log('Positive')
    }
    else { 
    console.log('Negative');
    }
    
    
}
signCheck(-7,  6, -5)