function evenAndOddsubtraction(input){
    let sum = 0;
    let num = 0;
    for (let i = 0; i < input.length; i++){
        num = input[i];
        num %2 == 0 ? sum += num : sum -= num;
    }
    console.log(sum);

}

evenAndOddsubtraction([1,2,3,4,5,6])