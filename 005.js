function leapYear(year1, year2){
    str = "";
    for (let year = year1; year <= year2; year++){
        if( (year % 400 === 0) || (year % 4 === 0) ){
            str += `${year} adalah tahun kabisat <br/>`;
        }else{
            str += `${year} adalah bukan tahun kabisat <br/>`;
        }
    }
    return str;
}

document.write(leapYear(1600,2020)); // output true
document.write("<br/>");
