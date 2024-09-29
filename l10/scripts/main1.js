function memoize(fn) {
    const cache = new Map()
    return function(...args) {
      const key = JSON.stringify(args)
      if (cache.has(key)) {
        console.log('Fetching from cache:', key);
        return cache.get(key);
      }
      const result = fn(...args)
      cache.set(key, result); 
      console.log('Computing and caching result for:', key);
      return result;
    };
  }
  function slowFunction(num) {
    return num * 2;
  }
  const memoizedFunction = memoize(slowFunction)