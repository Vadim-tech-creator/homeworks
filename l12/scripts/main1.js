function counter(startValue, step) {
    let currentValue = startValue
    const countFunction = function() {
      return currentValue; 
    };
    countFunction.increment = function() {
      currentValue += step; 
      return currentValue; 
    };
    countFunction.decrement = function() {
      currentValue -= step; 
      return currentValue; 
    };
    countFunction.reset = function() {
      currentValue = startValue; 
      return currentValue; 
    };
    return countFunction; 
  }
  