function padString(str, length, symbol, toLeft = false) {
    if (length <= str.length) {
        return str
    }
    let paddingLengt = length - str.length
    let padding = ""
    for (let i = 0; i < paddingLengt; i++) {
        padding += symbol
    }
    if (toLeft) {
        return padding + str
    } else {
        return str + padding
    }
}