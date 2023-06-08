const {createRandomCustomer} = require("../src/customers")

describe("each customer object should have the following properties", () => {
    test("name", () => {
        const newCustomer = createRandomCustomer();
        expect(newCustomer).toHaveProperty('name');
        expect(typeof(newCustomer.name)).toEqual("string");
    })
    test("id", () => {
        const newCustomer = createRandomCustomer();
        expect(newCustomer).toHaveProperty('id');
    })
    test("member number", () => {
        const newCustomer = createRandomCustomer();
        expect(newCustomer).toHaveProperty('memberNumber');
    })
    test("date of last visit", () => {
        const newCustomer = createRandomCustomer();
        expect(newCustomer).toHaveProperty('dateOfLastVisit');
    })
})
