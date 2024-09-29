function intervalRace(functions, interval) {
    return new Promise((resolve) => {
        const results = []
        let index = 0
        const executeFunction = () => {
            if (index < functions.length) {
                results.push(functions[index]());
                index++
                setTimeout(executeFunction, interval)
            } else {
                resolve(results)
            }
        }
        executeFunction()
    })
}