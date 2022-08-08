function wordTracker(input){
let tracker = {};
let token = input.shift().split(' ');
tracker[token[0]] = 0;
tracker[token[1]] = 0;
for(let el of input){
    if (tracker.hasOwnProperty(el)){
        tracker[el] += 1;
    }
}
let entries = Object.entries(tracker);
let sortEntries = entries.sort(([a,b], [c,d]) =>{
    return d - b;})
   for (el of sortEntries){
    console.log(el[0] + ' - ' + el[1]);
   }

}
wordTracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'])