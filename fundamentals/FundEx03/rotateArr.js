function rotateArr(arr){
let rotations = Number(arr.pop([arr.length - 1]));
for (let i = 1; i <= rotations; i++){
    
    arr.unshift(arr[arr.length - 1]);
 arr.pop()

}
console.log(arr.join(' '));
}


rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15'])