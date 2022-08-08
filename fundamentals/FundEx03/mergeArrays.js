function mergeArrsys(arr, arr1){
    let arr2 = [];
   for (let i = 0; i < arr.length; i++){
       if (i % 2 === 0){
        arr[i] = Number(arr[i]);
        arr1[i] = Number(arr1[i]);
           arr2.push(arr[i] + arr1[i])
       }
       else{
           arr2.push(arr[i] + arr1[i])
       }
   }
   console.log(arr2.join(' - '));
   
   

  }
    

mergeArrsys(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])