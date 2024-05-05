const capitalize = require("./capitalize.js")
const reversed = require("./reverse.js")
const calculator = require("./calculator.js");

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



