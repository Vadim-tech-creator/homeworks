function retry(fn, maxAttempts) {
    return function(...args) {
      let lastError
      for (let i = 0; i < maxAttempts; i++) {
        try {
          return fn(...args); 
        } catch (error) {
          lastError = error; 
        }
      }
      throw lastError; 
    };
  }
  function unreliableFunction() {
    if (Math.random() < 0.7) {
      throw new Error('Random failure');
    }
    return 'Success!';
  }
  const retriedFunction = retry(unreliableFunction, 5);
  try {
    console.log(retriedFunction());
  } catch (error) {
    console.error('Final error:', error.message);
  }