function passwordValidator(pass){
    let condition = false;
    let condition1 = false;
    let condition2 = false;
    let newArr = [];
    let counter = 0;
    let arr = pass.split('');
    for (let elements of arr){
       newArr.push(elements.charCodeAt())
    }
    if (arr.length < 6 || arr.length > 10){
        console.log("Password must be between 6 and 10 characters")
        condition = true;
    }
    for (let i = 0; i < newArr.length; i++){
        if ((newArr[i] >= 48 && newArr[i] <= 57) || (newArr[i] >= 65 && newArr[i] <= 90) || (newArr[i] >= 97 && newArr[i] <= 122)){

        }
        else{
            console.log("Password must consist only of letters and digits");
            condition1 = true; break;
        }
        if (newArr[i] >= 48 && newArr[i] <= 57){
            counter++;
        }
    }
    if (counter < 2){
        console.log("Password must have at least 2 digits")
        condition2 = true;
    }
    else if(condition == false && condition1 == false && condition2 == false){
        console.log('Password is valid');
    }
    
    

}
passwordValidator('logIn')