function nextDay(year, month, day){
    if (year == 1){
        year = 1901;
    }
    day += 1;
    if (day == 30){
        day = 1;
        month++;
    }
    else if (month == 2 && day == 29 && year % 4 != 0){
        day = 1;
        month = 3;
       
    }
    else if (day == 31 && (month == 2 || month == 4 || month == 6 || month == 9 || month == 11)){
       day = 1;
       month += 1;
    }
    else if (month == 12 && day == 32){
        day = 1;
        month = 1;
        year++;
    }
    let arr = [year, month, day]
    console.log(arr.join('-'))
}
nextDay(2016, 9, 30)