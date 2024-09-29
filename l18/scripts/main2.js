async function sequenceAsync(asyncFunctions) {
    const results = [];
    for (const asyncFunction of asyncFunctions) {
        const previousResult = results.length > 0 ? results[results.length - 1] : undefined
        try {
            const result = await asyncFunction(previousResult)
            results.push(result);
        } catch (error) {
            console.error('Error executing function:', error);
            results.push(null); 
        }
    }
    return results;
}