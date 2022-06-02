function specialNumbers(num){
    let istrue = false;
    let result = 0;
    let a = 0;
    for(let i = 1; i<= num; i++){
        
        istrue = false
        result = 0
        result = i % 10;
        a = i;
        a -= result;
    while(parseInt(a) > 1){
        a = a / 10;
        result++;
    }
   
        if (result == 5 || result == 7 || result == 11){
            istrue = true;
        }
        console.log(`${i} -> ${istrue? "True" : "False"}`)
        
        
        }

        


    
    }



