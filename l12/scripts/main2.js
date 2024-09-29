function sequence(...fns) {
    return function(value) {
      for (const fn of fns) {
        value = fn(value); 
      }
      return value; 
    };
  }
  function addOne(x) {
    return x + 1;
  }
  
  function multiplyByTwo(x) {
    return x * 2;
  }