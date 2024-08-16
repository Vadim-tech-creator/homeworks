function Values(arr1, arr2) {
    let resultArray = []
    for (let i = 0; i < arr1.length; i++) {
        if (resultArray.indexOf(arr1[i]) === -1) {
            resultArray.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (resultArray.indexOf(arr2[i]) === -1) {
            resultArray.push(arr2[i])
        }
    }
    return resultArray;
}
