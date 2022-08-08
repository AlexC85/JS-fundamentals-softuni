function listOfProducts(arr) {
    let newArr = arr.sort();
    let listNumber = 1
    for (let el of newArr){
        console.log(`${listNumber}.${el}`)
        listNumber++;
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])