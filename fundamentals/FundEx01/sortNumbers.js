function sortNumbers(a, b, c){
let biggest = 0;
let middle = 0;
let smallest =0;
if (a > b && a > c){
    biggest = a;
    if (b > c){
        middle = b;
        smallest = c;
    }
    else {
        middle = c;
        smallest = b;
    }
}
else if (b > a && b > c){
    biggest = b;
    if (a > c){
    middle = a;
    smallest = c;}
    else{
        middle = c;
        smallest = a;
    }
}
else{
    biggest = c;
    if (a > b){
        middle = a;
        smallest = b;
    }
    else{
        middle = b;
        smallest = a;
    }
}
console.log(biggest)
console.log(middle)
console.log(smallest)
}

sortNumbers(1, 2, 3)


