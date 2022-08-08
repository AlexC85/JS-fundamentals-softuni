function numbers(string){
    let resultArr = [];
    let arr = string.split(' ');
    arr.sort((a, b) => b - a);
    let average = 0;
    for (let el of arr){
        average += Number(el)
    }
    average = average / arr.length;
    for (let i = 0; i < 5; i++){
    if (arr[i] > average){
    resultArr.push(arr[i]);
    }
    else if( i < 1){
    return 'No'
    }
    else{
        break;
    }
    }

    
    console.log(resultArr.join(' '));

}
numbers('-1 -2 -3 -4 -5 -6')