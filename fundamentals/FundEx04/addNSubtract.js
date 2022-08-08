function addNSubtract(a, b, c){
    /* let sum = 0;
    let result = 0;
function add (x, y){
    sum = x + y
    return x + y;
}
function subtract(x, y){
    result = x - y;
    return x - y;
}
add(a,b);
subtract(sum, c)
return result
}
 */
let sum = (x,y) => x + y;
let subtract = (x, y) => x - y;
let resultFirstNSecond = sum(a,b);
let finalResult = subtract(resultFirstNSecond, c)
return finalResult

}
addNSubtract(20, 9, 10)