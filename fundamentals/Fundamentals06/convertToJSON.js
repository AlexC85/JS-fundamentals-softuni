function convertToJSON(name, surname, hairColor){
    let myObj = {
        name,
        lastName : surname,
        hairColor
    }
    console.log(JSON.stringify(myObj));
}
convertToJSON('George', 'Jones','Brown')