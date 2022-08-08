function spiceMustFlow(yield){
    let herbs = 0;
    days = 0;
    let i = 0
    for (i = 1; yield >= 100; yield -= 10){
        days += 1;
        i += 1;
        herbs += yield;

    }
    if(herbs < 100){
        console.log(days);
    console.log(herbs);
    }
    else{
    herbs = herbs - (i * 26);
    console.log(days);
    console.log(herbs);
    }

}


spiceMustFlow(111);