function printNthElement(arr){
    let n = Number(arr.splice([arr.length - 1]));
    let arrL = arr.length;
    let newArr = [];
    for (let i = 0; i < arrL; i += n){
        newArr.push(arr[i])
    }
    console.log(newArr.join(' '));
}
printNthElement(["5", "20", "31", "14", "20", "2"])