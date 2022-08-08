function firstNLast(arr){
/*     let current = Number(arr.shift());
    let firstThree = [];
    let lastThree = [];
    for (let i = 0; i < current; i++){
        firstThree.push(arr[i]);
    }
    for (let i = arr.length - (current); i <= arr.length - 1; i++){
        lastThree.push(arr[i]);
    }
    console.log(firstThree.join(' '));
    console.log(lastThree.join(' '));
 
} */
let k = arr.shift();
let firstK = arr.slice(0, k);
let lastK = arr.slice(- k);
console.log(firstK.join(' '));
console.log(lastK.join(' '));
}
firstNLast([3, 6, 7, 8, 9])