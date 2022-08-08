function sortAnArr(arr){
    let resultArr = [];
    let finalArr = [];
    for (let i = 0; i < arr.length; i++){
        arr.sort((a, b) => (a.length - b.length || a.localeCompare(b)));
    }
    
    
console.log(arr.join(`\n`));
}
sortAnArr(['beta', 'gamma', 'alpha'])