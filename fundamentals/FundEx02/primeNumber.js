function primeNumber(a){
    let counter = 0;
    isprime = true;
    for (let i = 1; i <= a; i++){
        if(a % i === 0){
            counter++;
            if (counter == 3){
                isprime = false;
                break;
            }
        }
    }
    console.log(isprime);

}
primeNumber(107)