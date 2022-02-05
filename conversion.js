/*****Leap Year*****

function leapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
    return year;
}
const input = leapYear(2020);
console.log('This is the leap Year :', input);
*/

function leapYearChecker(year) {
    //condtion to check leap year
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        console.log(year + ' is the leap Year');
    }
    else {
        console.log(year + ' is Not the leap Year');
    }
}
const input = leapYearChecker(2100);


