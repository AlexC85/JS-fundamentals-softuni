function charactersInRange(char1, char2){
    let a = char1.charCodeAt();
    let b = char2.charCodeAt();
    let c = Math.min(a, b);
    let d = Math.max(a, b);
    let output = [];
    let k = 0;
    for(let i = c + 1; i < d; i++, k++){
    output[k] = String.fromCharCode(i);
    }
    console.log(output.join(' '))
    return output.join(' ')
    

}
charactersInRange('+', ':')