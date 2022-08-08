function solve(num){
    let numberAsString = num.toString();
    let sumOfAllDigits = 0;
    for(let i = 0; i < numberAsString.length; i++){
        
        sumOfAllDigits += Number(numberAsString[i]);
        
    }
    console.log(sumOfAllDigits)
}


solve(245678)