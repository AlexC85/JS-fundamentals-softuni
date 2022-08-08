function sumOfOdd(n){
    let a = 1
    let sum = 0
for (let i = 0; i < n; i++){
    console.log(a)
    sum += a;
    a += 2;
    
    }
    console.log(`Sum: ${sum}`)
}
sumOfOdd(5)