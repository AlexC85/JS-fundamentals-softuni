function reverseStr(string){
    let arr = [];
    arr = string.split('');
    let arrL = arr.length;
    let k = 0;
    let newArr = []
    for (let i = arrL - 1; i >= 0; i--, k++){
        newArr[k] = arr[i];
        
    }
    console.log(newArr.join(''));


}
reverseStr('hello')
