function loadingBar(loadingPerc){
    let arr = [];
    for (let i = 0; i < loadingPerc; i += 10){
        arr.push('%');
    }
    for(let i = loadingPerc + 10; i <= 100; i += 10){
        arr.push('.');
    }
    //30% [%%%.......] Still loading...
    
    if(loadingPerc < 100){
        console.log(`${loadingPerc}% [${arr.join('')}]`)
        console.log('Still loading...')
    }
    else{
        console.log('100% Complete!')
        console.log(`${loadingPerc}% [${arr.join('')}]`)
    }

}
loadingBar(70)