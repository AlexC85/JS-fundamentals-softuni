function addNRemove(arr){
    let newArr = [];
    let counter = 1;
    for (let i = 0; i < arr.length; i++, counter++){
        if (arr[i] === 'add'){
            newArr.push(counter);
        }
        else {
            newArr.pop();
        }
    }
    if(newArr.length == 0){
        console.log("Empty");
    }
    else{
    console.log(newArr.join(' '));
    }
}
addNRemove(['remove', 'add', 'add', 'add'])