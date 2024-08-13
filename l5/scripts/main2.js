function findGCD(a, b) {
    if (a < 0) a = -a
    if (b < 0) b = -b
let min;
    if (a < b) {
        min = a
    } else {
        min = b
    }
    for (let i = min; i >= 1; i--) {
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }
    return 1;
}