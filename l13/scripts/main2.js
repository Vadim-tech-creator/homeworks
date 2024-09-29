function permute(array) {
    const result = []
    function generatePermutations(currentPermutation, remainingElements) {
      if (remainingElements.length === 0) {
        result.push(currentPermutation);
        return;
      }
      for (let i = 0; i < remainingElements.length; i++) {
        const nextElement = remainingElements[i]
        const newRemaining = remainingElements.slice(0, i).concat(remainingElements.slice(i + 1))
        generatePermutations(currentPermutation.concat(nextElement), newRemaining);
      }
    }
    generatePermutations([], array);
    return result;
  }