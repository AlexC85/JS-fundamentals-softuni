function arrayRotation(arr, a){
    
    while(a > 0){
        arr.push(arr[0]);
        arr.shift(arr[0]);
        a--;
    }
    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);