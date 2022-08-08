function magicSum(arr, n){
    let arrL = arr.length;
    for (let i = 0; i < arrL; i++){
        for (let j = i + 1; j < arrL; j++){
             if (arr[i] + arr[j] == n){
             console.log(`${arr[i]} ${arr[j]}`);
             }
        }
    }

}
magicSum([1, 7, 6, 2, 19, 23],8)