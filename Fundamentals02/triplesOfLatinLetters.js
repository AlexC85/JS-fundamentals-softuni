function triplesOfLatinLetters(num){
    let string = '';
    for (let i = 0; i < num; i++){
        
        for( let j = 0; j < num; j++){
            for (let k = 0; k < num; k++){
                string = '';
                string += String.fromCharCode(97 + i)
                string += String.fromCharCode(97 + j)
                string += String.fromCharCode(97 + k)
                console.log(string)
            }
        }
    }

}
triplesOfLatinLetters(2)