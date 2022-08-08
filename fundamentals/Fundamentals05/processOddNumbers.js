function processOddNumbers(arr){
    /* let newArr = [];
    let arrL = arr.length;
    for (let i = 0; i < arrL; i++){
        if (i % 2 === 1){
            newArr.unshift(arr[i] * 2);
        }
    }
    console.log(newArr.join(' ')); */
    /* let filtered = arr.filter((el, i) => i % 2 == 1);
    let newARR = filtered.map(x => x*2) */
        console.log(arr.filter((el, i) => i % 2 == 1).map(x => x*2).reverse().join(' '));
    
}
processOddNumbers([3, 0, 10, 4, 7, 3])