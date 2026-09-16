import {test, expect} from "@playwright/test"

test.describe.serial("Login and Profile Tests", () => {
//test.describe.parallel("Login and Profile Tests", () => {
    test.beforeAll(() => {
        console.log("this is before all test")
    })

     test.afterAll(() => {
        console.log("this is after all test")
    })

    test.beforeEach(() => {
        console.log("this is before each test")
    })

    test.afterEach(() => {
        console.log("this is after each test")
    })

    test("TC001 - login test", async ({page}) => {
        console.log("this is login test")    
    })

    test("TC002 - homepage test", async ({page}) => {
        console.log("this is homepage test")    
    })

    test("TC003 - profile test", async ({page}) => {
        console.log("this is profile test")    
    })

    test("TC004 - logout test", async ({page}) => {
        console.log("this is logout test")    
    })

})