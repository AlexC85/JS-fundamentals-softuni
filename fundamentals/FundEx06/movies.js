function movies(movies){
let resultArr = [];
for (let el of movies){
    if (el.includes('addMovie ')){
        let movie = el.replace('addMovie ', '')
        resultArr.push({name:movie})
    }
    else if (el.includes('directedBy')){
        let movieInfo = el.split(' directedBy ')
        let name = movieInfo[0];
        let director = movieInfo[1];
        for (let el1 of resultArr){
            if (el1.name == name){
                el1.director = director
            }
        }
    }
    else if (el.includes('onDate')){
        
        let [name, date] = el.split(' onDate ')
        for(let el of resultArr){
        if (el.name == name){
        el.date = date;    
     }
    }
        
    }
   
    
    /* let commands = el.split(' ')
    let token1 = commands.shift();
    console.log(token1); */
}
for (let el of resultArr){
    if ( el.name && el.director && el.date){
        console.log(JSON.stringify(el));
    }
}
}
movies([

    'addMovie The Avengers',
    
    'addMovie Superman',
    
    'The Avengers directedBy Anthony Russo',
    
    'The Avengers onDate 30.07.2010',
    
    'Captain America onDate 30.07.2010',
    
    'Captain America directedBy Joe Russo'
    
    ]);