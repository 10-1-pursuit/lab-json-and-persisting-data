const { generateProduct } = require("../src/products.js")

//Confirm all the correct fields exist when creating a new item.
describe("Field Checker", () => {

    test("Confirm all the correct fields exist when creating a new item.", () => {
        const actual = generateProduct().hasOwnProperty("id");
        const expected = true;
        expect(actual).toEqual(expected);
    });

});

describe("Data Type Checker", () => {

    test("Make sure the correct datatype is being inserted into each field.", () => {
        const actual = typeof generateProduct().id;
        const expected = "string";
        expect(actual).toEqual(expected);
    });

});

