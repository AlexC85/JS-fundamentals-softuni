function equalArrays(arr, arr1){
  let sum = 0;
  let i = 0
  for (i; i < arr.length; i++){
      if (arr[i] === arr1[i]){
      sum += Number(arr[i]);
      }
      else{
          break;
      }
  }
  if ( i == arr.length){
      console.log(`Arrays are identical. Sum: ${sum}`);
  }
  else{
      console.log(`Arrays are not identical. Found difference at ${i} index`);
  }
  
}

equalArrays(['1', '7', '8'], ['1', '7', '8'])