const fibo = [0, 1];
for (let i = 2; i <= 100; i++) {
    // Nth = (n-1)th + (n-2)th
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
