function binaryToDecimal(a){
    let arr = [];
    arr = a.split('');
    let sum = 0;
    let k = 7;
    let string =''
    for(let i = 0; i < arr.length; i++, k--){
        sum += Math.pow(2, k) * arr[i]
        
    }
    console.log(sum);
}
binaryToDecimal('10000011')