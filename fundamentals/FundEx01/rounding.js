function rounding(number, precision){
    if (precision > 15 ) {
        precision = 15;
        }
        let newNumber = Number (number.toFixed(precision));
        console.log(newNumber);
}

rounding(3.1410000,7)