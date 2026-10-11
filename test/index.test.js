const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe("capitalizeWords", () => {
    test("Check to see each word is capitalized", () => {
        const testWord = "hello world"

        const returnWord = capitalizeWords(testWord)

        expect(returnWord).toBe("Hello World")
    })

    test("Check for empty string", () => {
       const testWord = ""
       
       const returnWord = capitalizeWords(testWord)

       expect(returnWord).toBe("")
    })

    test("Check for string with special characters", () => {
        const testWord = "hello-world"

        const returnWord = capitalizeWords(testWord)

        expect(returnWord).toBe("Hello-World")
    })

    test("Check for single word string", () => {
        const testWord = "hi"

        const returnWord = capitalizeWords(testWord)

        expect(returnWord).toBe("Hi")
    })
})

describe("filterActiveUsers", () => {
    test("Checks array with active users", () => {
        const testArray = [
            { name: "Alice", isActive: true },
            { name: "Bob", isActive: false },
            { name: "John", isActive: true },
        ]

        const returnArray = filterActiveUsers(testArray)

        expect(returnArray).toBeTruthy()
    })

    test("Checks array with only inactive users", () => {
        const testArray = [    
            { name: "Alice", isActive: false },
            { name: "Bob", isActive: false },
            { name: "John", isActive: false },
        ]

        const returnArray = filterActiveUsers(testArray)

        expect(returnArray.length).toEqual(0)
    })

    test("Checks empty array", () => {
        const testArray = []
        
        const returnArray = filterActiveUsers(testArray)

        expect(returnArray.length).toEqual(0)
    })
})

describe("logAction", () => {
    test("Checks it generates correct log", () => {
        const testAction = "login"
            
        const testLogin = "John Vullo"

        const testTimeStamp = new Date().toISOString();

        const returnLogin = (logAction(testAction, testLogin))

        expect(returnLogin).toMatch(/User John Vullo performed login at /)
        })

    test("Checks if username or action is missing", () => {
        const testAction = ""

        const testLogin = ""

        const returnLogin = (logAction(testAction, testLogin))

        expect(returnLogin).toMatch(/User  performed  at /)

    })

    test("Checks of username or action is empty", () => {
        let testAction

        let testLogin

        const returnLogin = (logAction(testAction, testLogin))

        expect(returnLogin).toMatch(/User undefined performed undefined at /)
    })
})