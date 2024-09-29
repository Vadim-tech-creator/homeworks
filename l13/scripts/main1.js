function isPalindrome(num) {
    const strNum = num.toString()
    return strNum === strNum.split('').reverse().join('');
  }
  function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
  }
  function findPalindrome(num) {
    let steps = 0; 
    while (!isPalindrome(num)) {
      const reversedNum = reverseNumber(num)
      num += reversedNum
      steps++; 
    }
    return {
      result: num,
      steps: steps
    };
  }
const inputNumber = 196
const result = findPalindrome(inputNumber)
  console.log(result);