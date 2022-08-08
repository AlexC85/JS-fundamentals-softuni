function reverseArrayNums(num, input){
   let output = '';
   for(let i = num - 1; i >= 0; i--){
       if(i == 0){
        output += `${input[i]}`
       }
       else{
        output += `${input[i]} `
       }
      
   }
   console.log(output)
}

reverseArrayNums(3, [10, 20, 30, 40, 50])