function fancyBarcode(input){
let barcodes = input.shift();
for (let i = 0; i < barcodes; i++){
    let counter = 0;
    let currentValue = '';
let current = input[i];
if (current[0] !== '@'){
    console.log('Invalid barcode');
    continue;
}
else{
    current = current.replace('@', "");
    let index = current.indexOf('@');
    let substring = current.substring(index + 1);
    for (let digits of substring){
        if (digits !== 'Invalid barcode');
        continue;
    }
}
for(let el of current){
    
    if (Number(el)){
        currentValue += el;
    }
}
if(currentValue == ''){
    console.log('Product group: 00')
}
else{
console.log(`Product Group: ${currentValue}`);}
}
}

fancyBarcode((["3",

"@#FreshFisH@#",

"@###Brea0D@###",

"@##Che4s6E@##"]))