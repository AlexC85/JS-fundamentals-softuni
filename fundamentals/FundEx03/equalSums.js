function equalSums(arr){
    let arrL = arr.length;
    let sumLeft = 0;
    let sumRight = 0;
    let isther = true;
    if (arrL == 1){
        console.log(0);
    }
    if (arrL == 2){
        isther = false;
    }
    for (let i = 1; i < arrL - 1; i++){
        
        sumLeft = 0;
        sumRight = 0;
        for (let left = 0; left < i; left++){
            sumLeft += arr[left];
        }
        for (let right = i + 1; right <arrL; right++){
            sumRight += arr[right]
        }
        if (sumLeft === sumRight){
            console.log(i);
            isther = true;
            break;
        }
        else{
            isther = false;
        }

    
    }
    if (isther == false){
      console.log('no');
    }
    
}

equalSums([1, 2])

//equalSums([1, 2, 3, 3]);
/* equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1,1, 4])

equalSums([7]) */