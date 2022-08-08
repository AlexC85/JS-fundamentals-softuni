function simpleCalcluator(n, n1, operator) {
    let res = 0;
    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;
    let add = (x, y) => x + y;
    let subtract = (x, y) => x - y;

    switch(operator){
        case 'multiply' : res = multiply(n, n1); break;
        case 'divide' : res = divide(n, n1); break;
        case 'add' : res = add(n, n1); break;
        case 'subtract' : res = subtract(n, n1); break;
        
    }
    console.log(res)

}
simpleCalcluator(4, 5, 'multiply')