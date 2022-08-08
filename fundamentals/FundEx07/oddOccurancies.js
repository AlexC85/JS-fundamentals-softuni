function oddOccurancies(input){
    let arr = input.split(' ');
    let newArr = [];
    let result = {};
    let resultArr = [];
    for (let el of arr){
    el = el.toLowerCase();
    newArr.push(el)
    }
    for (let el of newArr){
        if (result.hasOwnProperty(el)){
            result[el] += 1;
        }
        else{
            result[el] = 1;
        }
    }
    for (let keys in result){
    if (result[keys] % 2 === 1){
        resultArr.push(keys);
    }
    }
    console.log(resultArr.join(' '));
    
}
oddOccurancies('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')