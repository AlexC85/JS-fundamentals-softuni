function storeProvision(current, delivery){
let storage = {};
let currentL = current.length;
let deliveryL = delivery.length;
for (let i = 0; i < currentL; i+=2){
    let product = current[i]
    storage[product] = Number(current[i+1])
}
for (let i = 0; i < deliveryL; i += 2){
    let product = delivery[i];
if (!storage.hasOwnProperty(product)){
    storage[product] = 0;
}
    storage[product] += Number(delivery[i+1])
    

}
for (let key in storage){
    console.log(`${key} -> ${storage[key]}`);
}
}
storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])