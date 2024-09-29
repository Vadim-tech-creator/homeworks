function group(arr, fn) {
    const result = {}
    for (let i = 0; i < arr.length; i++) {
      const key = fn(arr[i])
      if (!result[key]) {
        result[key] = []
      }
      result[key].push(arr[i]);
    }
    return result;
  }
  const numbers = [6.1, 4.2, 6.3]
  const groupedByMathFloor = group(numbers, Math.floor)
  console.log(groupedByMathFloor);

  const words = ['apple', 'banana', 'cherry', 'apricot']
  const groupedByFirstLetter = group(words, word => word[0])
  console.log(groupedByFirstLetter);