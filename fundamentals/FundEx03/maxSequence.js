function maxSeq(arr){
    let maxSequence = [];
    for (let i = 0; i < arr.length; i++){
        let currentSequence = [];
        for(let j = i; j < arr.length; j++){
            if(arr[i] === arr[j]){
                currentSequence.push(arr[i]);
            }
            else{
                break;
            }
        }
        if(currentSequence.length > maxSequence.length){
            maxSequence = currentSequence;
        }
    }
    console.log(maxSequence.join(' '))
}
maxSeq([7, 7, 7, 8, 9])