function amazing(a){
    a = a.toString();
    let sum = 0
    
    
    for (let i = 0; i < a.length; i++){
       
       sum += Number(a[i]); 
    }
    if (sum.toString().includes('9') ){
        console.log(`${a} Amazing? True`)
    }
    else{
        console.log(`${a} Amazing? False`)
    }
    

}
amazing (1233)