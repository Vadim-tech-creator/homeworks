function sumArrayPromise(numbers) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')) {
            return reject(new Error("Input must be an array of numbers"));
        }
        setTimeout(() => {
            const sum = numbers.reduce((acc, num) => acc + num, 0)
            resolve(sum);
        }, 3000)
    });
}