function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    return fact;
}
const input = factorial(6);
console.log('factorial is : ', input);