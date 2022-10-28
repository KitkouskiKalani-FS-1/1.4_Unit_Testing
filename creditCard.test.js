// Requirements
// TDD - create tests for a module that will:
// obscure credit card number except for the last 4 digits
// Test make sure the function obscures credit card numbers that are between the length of 12 and 16 digits

const creditCard = require("./creditCard")

describe("Credit Card Module Tests",()=>{
    test("As a user I want to send my credit card and have it return obscured",()=>{
        expect(creditCard("123456789012")).toEqual("XXXXXXXX9012")
    })
    test("As a user I want to be able to know if I sent an invalid credit card",()=>{
        expect(creditCard("0222313")).toEqual("Invalid Credit Card")
    })
})