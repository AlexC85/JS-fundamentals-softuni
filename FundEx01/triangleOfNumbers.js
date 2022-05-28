function triangleOfNumbers(n){
    for (let rows = 1; rows <= n; rows++){
        let printLine = '';
        for(let col = 1; col <= rows; col++){
            printLine += `${rows} `;
            
        }
        console.log(printLine)
    }
}

triangleOfNumbers(50)