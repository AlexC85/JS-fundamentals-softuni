function wordOccurancies(input){
let counter = {};
for (let el of input){
    if (counter.hasOwnProperty(el)){
        counter[el] += 1;
    }
    else{
        counter[el] = 1;
    }
}
let entries = Object.entries(counter);
let sortedEntries = entries.sort(([]))
}
wordOccurancies(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])