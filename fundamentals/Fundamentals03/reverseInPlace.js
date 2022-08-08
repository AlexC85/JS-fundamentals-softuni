function reverseInPlace(input){
    let output = ``;
    for(let i = input.length - 1; i >= 0; i--){
       if(i != 0){
            output += `${input[i]} `;
       }
       else{
           output += `${input[i]}`
       }
        
    }
    console.log(output);

}

reverseInPlace(['33', '123', '0', 'dd'])