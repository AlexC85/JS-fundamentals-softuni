function sorting(arr){
let resultArr = [];
let arrLength = arr.length
arr.sort((a, b) => a - b)
for (let i = 0; i < arrLength; i++){
    if (i % 2 == 1){
        resultArr.push(arr.shift());
    }
    else{
        resultArr.push(arr.pop());
    }
}
console.log(resultArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])