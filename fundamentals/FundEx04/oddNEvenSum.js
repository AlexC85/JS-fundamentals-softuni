function oddNEvenSum(num){
    let string = '';
    string += num;
    let even = 0;
    let odd = 0;
    let arr = string.split('')
    for(let elements of arr){
        if (Number(elements) % 2 === 0){
            even += Number(elements)
        }
        else{
            odd += Number(elements)
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`)

}
oddNEvenSum(97000041)