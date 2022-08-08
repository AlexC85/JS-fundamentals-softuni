function factorialDivision(a, b){
    let c = a;
    let d = b;
for (let i = 1; i < a; i++){
    c *= i;
}
for (let j = 1; j < b; j++){
    d *= j;
}

console.log((c / d).toFixed(2))
}
factorialDivision(6, 2)