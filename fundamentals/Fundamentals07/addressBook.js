function addressBook(input){
    let addressBook = {};
for(let el of input){
    let token = el.split(':');
    let name = token[0];
    let address = token[1];
    addressBook [name] = address;
}
let entries = Object.entries(addressBook);
let sortEntries = entries.sort(([a], [b]) =>{
    return a.localeCompare(b);
})
for(let [name, address] of sortEntries){
console.log(name + ' -> ' + address);
} 
}
addressBook(['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])