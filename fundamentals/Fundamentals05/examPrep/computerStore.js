function computerStore(arr){
let priceNoTax = 0;
let customer = arr.pop();
for (let el of arr){
    if(Number(el) < 0){
        console.log('Invalid price!')
    }
    else{
    priceNoTax += Number(el);
    }
}
let priceTax = priceNoTax * 1.2;
let finalPrice = priceTax;
if (customer == 'special'){
    finalPrice = priceTax * .9;
}
if (finalPrice == 0){
    console.log('Invalid order!');
}
else{
console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${priceNoTax.toFixed(2)}$\nTaxes: ${((priceTax - priceNoTax).toFixed(2))}$\n-----------\nTotal price: ${finalPrice.toFixed(2)}$`)
}
}
computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special'])