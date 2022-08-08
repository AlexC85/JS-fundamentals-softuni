function perfectNum(n){
    let halfOfThePerfectNum = n / 2;
    let counter = 0;
    for (let i = 1; i <= halfOfThePerfectNum; i++){
        if (n % i === 0){
            counter += i
        
        }
    }
    counter === n ? console.log('We have a perfect number!') : console.log("It's not so perfect.")

}
perfectNum(6)