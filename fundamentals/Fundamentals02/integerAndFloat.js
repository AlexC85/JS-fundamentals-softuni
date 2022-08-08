function integerNFloat(a, b, c){
    let sum = a + b + c;
    sum % 1 === 0 ? sum += " - Integer" : sum += " - Float";
    console.log(sum)


}

integerNFloat(100.1, 80, 70)