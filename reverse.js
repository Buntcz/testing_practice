function reversed(string) {
    const slicedString = string.split("");
    const reversedString = slicedString.reverse();
    return reversedString.join("")
}

module.exports = reversed;