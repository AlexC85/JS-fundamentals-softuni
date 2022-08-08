function addNSubtract(arr){
    let sum = 0;
    let sum1 = 0;
    for (let el of arr){
        sum += el;
    }
    for (let i = 0; i < arr.length; i++){
        arr[i] % 2 == 0 ? arr[i] += i : arr[i] -= i;
    }
    for (let el of arr){
        sum1 += el;
    }
    console.log(arr);
    console.log(sum);
    console.log(sum1)
}

addNSubtract([5, 15, 23, 56, 35])