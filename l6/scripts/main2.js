function camelCase(str, separator) {
    const words = str.split(separator)
    let result = ""
    for (let i = 0; i < words.length; i++) {
        if (i > 0) {
            result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
        } else {
            result += words[i].toLowerCase()
        }
    }
    return result
}