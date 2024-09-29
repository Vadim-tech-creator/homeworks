function validate(fn, validator) {
    return function(...args) {
      for (const arg of args) {
        if (!validator(arg)) {
          throw new Error(`Invalid argument: ${arg}`); 
        }
      }
      return fn(...args); 
    };
  }