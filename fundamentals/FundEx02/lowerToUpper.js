function lowerToUpper(n){
    let ascii = n.charCodeAt(0);
    ascii > 96 && ascii < 123 ? console.log('lower-case') : console.log('upper-case')
}


lowerToUpper('Z')