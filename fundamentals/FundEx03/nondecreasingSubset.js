function nondecreasingSubset(arr){
    let currentBiggest = 0;
    let newArr = [];
    for (let element of arr){
        if (element >= currentBiggest){
            currentBiggest = element;
            newArr.push(element);
        } 
    }
    console.log(newArr.join(' '));
}
nondecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])