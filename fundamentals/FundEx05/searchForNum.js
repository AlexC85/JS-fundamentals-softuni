function searchForNum(arr, arr2){
let firstNum = arr2[0];
let secondNum = arr2[1];
let searchedNum = arr2[2]
let counter = 0;
let newArr = arr.slice(0, firstNum);
for (let i = 0; i < secondNum; i++){
    newArr.shift();
}
for (el of newArr){
if (el == searchedNum){
    counter++;
}
}
console.log(`Number ${searchedNum} occurs ${counter} times.`);
}
searchForNum([5, 2, 3, 4, 1, 6], [5, 2, 3])