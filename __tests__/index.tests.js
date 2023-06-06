// Then, add Jest and write at least two tests. Since you are generating random data, what can you test, and how can you test it?

// You could:

// Confirm all the correct fields exist when creating a new item.
// Make sure the correct datatype is being inserted into each field.
// Confirm that the function to create one item creates only one item.
// Confirm that the function to create many items creates the correct number of items.

const {createRandomCustomer} = require("../src/customers")
const {run} = require("../src/index")

describe("", () => {
    test("", () => {
        const newCustomer = createRandomCustomer();
        expect(newCustomer).toHaveProperty('name')
        expect(newCustomer).toHaveProperty('dateOfLastVisit')
    })
})

describe.only("populate customers.json file with random customer object", () => {
    test("", () => {
        process.argv.push(1);
        run()
        const customersData = readJSONFile("../data", "customers.json");
        expect(customersData.length).toEqual(1);
    })
})

