function memoize(fn, maxCacheSize) {
    const cache = new Map()
    return function(...args) {
      const key = JSON.stringify(args)
      if (cache.has(key)) {
        console.log('Fetching from cache:', key);
        return cache.get(key);
      }
      const result = fn(...args)
      cache.set(key, result); 
      if (cache.size > maxCacheSize) {
        const firstKey = cache.keys().next().value
        cache.delete(firstKey)
        console.log('Cache limit exceeded. Removing oldest entry:', firstKey);
      }
      console.log('Computing and caching result for:', key);
      return result;
    };
  }
  function slowFunction(num) {
    return num * 2;
  }
  const memoizedFunction = memoize(slowFunction, 3)