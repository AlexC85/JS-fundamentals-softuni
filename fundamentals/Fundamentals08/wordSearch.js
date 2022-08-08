function wordSearch(string, word){
    let counter = 0;
let sentenceArr = string.split(' ');
for (let el of sentenceArr){
if (el == word){
    counter++;
}
}
console.log(counter);

}
wordSearch('This is a short sentence and is great.', 'is')