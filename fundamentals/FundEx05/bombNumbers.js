function bombNumbers(arr, numbers){
    let bombNumber = numbers[0];
    let count = numbers[1];
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++){
        let startIndex = i - count;
        if(startIndex < 0){
            startIndex = 0;
        }
        if (arr[i] == bombNumber){
            arr.splice(startIndex, count * 2 + 1)
        }
    }
    let sum = 0;
    for (let el of arr){
        sum += (el);
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 4])