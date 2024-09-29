function logArguments(fn) {
    return function(...args) {
      console.log('Arguments:', args); 
      return fn(...args);         
    };
  }
  