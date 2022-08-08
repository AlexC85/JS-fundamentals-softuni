function revealWords(words, sentence){
    let wordArr = words.split(', ');
    let sentenceArr = sentence.split(' ');
    let sentenceArrL = sentenceArr.length;
    for (let i = 0; i < sentenceArrL; i++){
    if (!sentenceArr[i].indexOf('*')){
        for (let el of wordArr){
            if (el.length == sentenceArr[i].length){
                sentenceArr.splice(i, 1, el)
            }
        }
    }
    }  
    console.log(sentenceArr.join(' ')); 
}
revealWords('great, learning', 'softuni is ***** to ********')