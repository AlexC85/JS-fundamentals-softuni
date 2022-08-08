function schoolGrades(input){
    let gradeBook = {};
    for (let el of input){
        let token = el.split(' ')
        let name = token[0];
        let sum = 0;
        for(let i = 1; i < token.length; i++){
            sum += Number(token[i]);
        }
        sum = sum / (token.length - 1); 
        if (gradeBook.hasOwnProperty(name)){
            gradeBook[name] += sum;
            gradeBook[name] = gradeBook[name] / 2
        }
        else{
            gradeBook[name] = sum;
        }
    }
    let entries = Object.entries(gradeBook);
    let sortEntries = entries.sort(([a], [b]) =>{
    return a.localeCompare(b);})
    for (let el of sortEntries){
        console.log(`${el[0]}: ${Number(el[1]).toFixed(2)}`);
    }
    
}
schoolGrades(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6'])