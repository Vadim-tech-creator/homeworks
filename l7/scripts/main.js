function reverseArray(array) {
    let reversedArr = []
    let length = array.length
    for (let i = 0; i < length; i++) {
        reversedArr[i] = array[length - 1 - i];
    }
    return reversedArr;
}
