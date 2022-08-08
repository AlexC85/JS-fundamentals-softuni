function formatGrade(grade){
    let gradWords = '0';
    let formatedGrade = grade.toFixed(2);
 /*    < 3.00 - "Fail"

· >= 3.00 and < 3.50 - "Poor"

· >= 3.50 and < 4.50 - "Good"

· >= 4.50 and < 5.50 - "Very good"

· >= 5.50 - "Excellent */
if(grade < 3){
    gradWords = 'Fail';
    formatedGrade = 2;
}
else if(grade < 3.50){
    gradWords = 'Poor';
}
else if(grade < 4.50){
    gradWords = 'Good';
}
else if(grade < 5.50){
    gradWords = 'Very good';
}
else{
    gradWords = 'Excellent';
}
console.log(`${gradWords} (${formatedGrade})`);
}
formatGrade(4)