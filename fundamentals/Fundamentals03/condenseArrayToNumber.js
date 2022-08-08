function condenseArrayToNumber(arr){
/*While we have more than one element in the array nums[], repeat the following:

· Allocate a new array condensed[] of size nums.Length-1.

· Sum the numbers from nums[] to condensed[]:

o condensed[i] = nums[i] + nums[i+1]

· nums[] = condensed[]

*/
while (arr.length > 1){
    let temp = [];
    for (let i = 0; i < arr.length - 1; i++){
        temp[i] = arr[i] + arr [i + 1]; 
    }
    arr = temp;

}
console.log(arr[0])
}

condenseArrayToNumber([2,10,3]) 



