function printNSum(a, b){
    let sum = 0;
    let printLine = '';
     for (let i = a; i <= b; i++){
         sum += i;
         if(i === b){
            printLine += `${i}`;
         }
         else{
         printLine += `${i} `;
         }
        }   
        console.log (printLine)
        console.log (`Sum: ${sum}`)
    }

    printNSum(5, 10)