function mathPower(a, b){
    let output = 1;
    for (let i = 1; i <= b; i++){
    output *= a;
    }
    console.log(output)
}
mathPower(2,8)