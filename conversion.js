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