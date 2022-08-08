function lastNumSequence(n, k){
    let arr = [1];
    
/*     for(let i = 0; i < n - 1;i++){
        let currentSum = 0;
        for (let j = i - k + 1; j <= i;j++){
            
        if (j < 0){

        }
        else{
            currentSum += arr[j];
            
        }
    }
    arr.push(currentSum)
    }
return arr.join(' ') */
for (let i = 0; i < n - 1; i++){
    let sum = 0;
    let newArr = arr.slice(-k)
    for (let el of newArr){
    sum += el;
    }
    arr.push(sum)
}
console.log(arr.join(' '));

}

lastNumSequence(6, 3)