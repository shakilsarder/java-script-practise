/*
function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    return fact;
}
const input = factorial(6);
console.log('factorial is : ', input);
*/

/*
function myFactorial(number) {
    let fact = 1;
    let i = 1;
    while (i <= number) {
        fact *= i;
        i++;
    }
    return fact;
}
const input = myFactorial(7);
console.log('factorial is : ', input);
*/

function myFactorial(number) {
    let fact = 1;
    let i = number;
    while (i >= 1) {
        fact *= i;
        i--;
    }
    return fact;
}
const input = myFactorial(3);
console.log('factorial is : ', input);