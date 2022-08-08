function storage(input){
    let storage = {};
    for (let el of input){
        let [product, quantity] = el.split(' ');
 if (storage.hasOwnProperty(product)){
    storage[product] += Number(quantity)
 }
 else {
    storage[product] = Number(quantity);
 }
    }
for (let keys in storage){
    console.log(keys + ' -> ' + storage[keys]);
}
}
storage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])