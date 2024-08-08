let N = 150
console.log("Досконалі числа від 1 до " + N + ":");
for (let num = 1; num <= N; num++) {
    let sum = 0;
for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
         sum += i;
    }
}
    if (sum === num) {
        console.log(num);
    }
}