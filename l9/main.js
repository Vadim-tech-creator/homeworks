function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  function filterPrimes(arr) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  