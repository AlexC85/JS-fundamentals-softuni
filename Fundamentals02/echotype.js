function echo(para){
    let type = typeof para;
    console.log(typeof para);
    if (type == "string" || type == "number"){
        console.log(para)
    }
    else{
        console.log("Parameter is not suitable for printing")
    }

}