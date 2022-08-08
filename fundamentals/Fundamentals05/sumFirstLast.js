function sumFirstLast(arr){
let sum = 0;
sum += Number(arr.shift());
sum += Number(arr.pop())
return sum;
}