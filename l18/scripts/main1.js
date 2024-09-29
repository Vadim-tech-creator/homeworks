function concurrentPromises(promises, limit) {
    return new Promise((resolve, reject) => {
        const results = [];
        let index = 0
        let activePromises = 0
        function runNext() {
            if (index >= promises.length && activePromises === 0) {
                return resolve(results);
            }
            while (activePromises < limit && index < promises.length) {
                activePromises++;
                const currentIndex = index
                promises[index++]
                    .then(result => {
                        results[currentIndex] = result; 
                    })
                    .catch(error => {
                        results[currentIndex] = error; 
                    })
                    .finally(() => {
                        activePromises--; 
                        runNext(); 
                    });
            }
        }
        runNext(); 
    });
}