function rightplace(string, char, result){
    let res = string.replace('_',char);
    if (res === result){
        console.log("Matched")
    }
    else{
        console.log("Not Matched")
    }

}

rightplace('str_ng', 'i', 'string')