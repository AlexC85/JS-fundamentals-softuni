function distinctArray(arr){
    let arrL = arr.length;
    let result = [];
    for(let el of arr){
        if (!result.includes(el)){
            result.push(el)
        }
    }
   
/* for (let i = 0; i < arrL; i++){
    for (let j = i + 1; j < arrL; j++){
        let counter = 0;
        if (arr[i] == arr[j]){
            counter++;
            arr.splice(j, 1)           
        }
    }
}
 */
console.log(result.join(' '))


}

distinctArray([1, 2 , 3, 4,7,8,5,6, 3, 3]); 