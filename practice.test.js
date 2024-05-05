const capitalize = require("./capitalize.js")
const reversed = require("./reverse.js")
const calculator = require("./calculator.js");
const caesarCipher12 = require("./ceasarCipher.js")
const analyzeArray = require("./analyzeArray.js")

test("Capitalization", () => {
    expect(capitalize("string")).toBe("String")
})

test("Capitalization", () => {
    expect(capitalize("dog")).toBe("Dog")
})

test("Capitalization", () => {
    expect(capitalize("cat")).toBe("Cat")
})

test("Reverse", () => {
    expect(reversed("cat")).toBe("tac")
})

test("Reverse", () => {
    expect(reversed("testosterone")).toBe("enoretsotset");
})

test("Reverse", () => {
    expect(reversed("aeroplane")).toBe("enalporea");
})

test("add", () => {
    expect(calculator.add(2,2)).toBe(4)
})


test("substract", () => {
    expect(calculator.substract(5,2)).toBe(3)
})


test("multiply", () => {
    expect(calculator.multiply(4,6)).toBe(24)
})


test("divide", () => {
    expect(calculator.divide(2,2)).toBe(1)
})

test("CaesarCipher", () => {
    expect(caesarCipher12("hello", 12)).toBe("tqxxa")
})

test("CaesarCipher", () => {
    expect(caesarCipher12("hello", 5)).toBe("mjqqt")
})

test("analyzeArray", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
});

test("analyzeArray2", () => {
    expect(analyzeArray([3,4,3,5,7,9,4])).toStrictEqual({
        average: 5,
        min: 3,
        max: 9,
        length: 7
      })
});

