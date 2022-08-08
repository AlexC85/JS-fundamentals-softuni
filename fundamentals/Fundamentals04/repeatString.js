function repeatStrin(str, reps){
    let result ='';
    for(let i = 0; i < reps; i++){
        result += str;
    }
    return(result)
    
}

console.log(repeatStrin('abc', 3))