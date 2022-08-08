function pirateLoot(arr){
    let lootArr = arr.shift().split('|');
    for(let i = 0; i < arr.length; i++){
        let current = arr[i].split(' ');
        let command = current.shift();
        let items = current;
        switch (command){
            case 'Loot': for (let j = 0; j < items.length; j++) 
               if(!lootArr.includes(items[j])){
                lootArr.unshift(items[j]);
               }break;
            case 'Drop' : if (items[0] < 0){}
            else{
                let safeCurrent = lootArr.splice(items[0], 1);
                lootArr.push(safeCurrent[0])
            }break;
            case 'Steal' : let stolen = [];
            for(let i = 0; i < Number(items[0]); i++){
                stolen.unshift(lootArr.pop());
            }console.log(stolen.join(', ')); break;
            case 'Yohoho!': let average = '';
            for(let el of lootArr){
                average += el;
            }
            if((average.length) / (lootArr.length)){
            console.log('Average treasure gain: ' + ((average.length) / (lootArr.length)).toFixed(2) + ' pirate credits.');}
            else{
                console.log('Failed treasure hunt.');
            }
        } 
            
            
        }

    
   
}
pirateLoot((["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]))