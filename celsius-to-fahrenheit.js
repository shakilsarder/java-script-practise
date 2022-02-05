function checker(celsius) {
    var fahrenheit = celsius * 1.8;
    fahrenheit += 32;
    return fahrenheit;
}
const input = checker(32);
console.log('Temperture is : ', input, ' Fahrenheit');