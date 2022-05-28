function vacation(number, type, day){
let total = Number;
let singlePrice = Number;
switch(type){
    case'Students':
    switch(day){
        case 'Friday':
            singlePrice = 8.45;
            break;
        case 'Saturday':
             singlePrice = 9.80; break; 
        case 'Sunday':
            singlePrice = 10.46; break;
    }
    total = number * singlePrice;
    if (number >= 30){
        total = total * .85;
    }
    break;

    case 'Business':
        switch(day){
            case 'Friday':
                singlePrice = 10.90;
                break;
            case 'Saturday':
                 singlePrice = 15.60; break; 
            case 'Sunday':
                singlePrice = 16.00; break;
        }
        total = number * singlePrice;
        if (number >= 100){
        total = (number - 10) * singlePrice;
        }
        break;

        case 'Regular':
            switch(day){
                case 'Friday':
                    singlePrice = 15.00; break;
                case 'Saturday':
                     singlePrice = 20.00; break; 
                case 'Sunday':
                    singlePrice = 22.50; break;
            }
            total = number * singlePrice;
           if (number >= 10 && number <= 20){
               total = total * .95
           } 
           break;
    

}
console.log(`Total price: ${total.toFixed(2)}`)
}

vacation(30, "Students", "Sunday")