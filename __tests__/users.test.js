const { createRandomUser } = require("../src/users");

// - Confirm all the correct fields exist when creating a new item.
describe("Checks if the user object has all the required fields", () => {
    it("Checks if the user objects has an id field", () => {
        const actual = createRandomUser().hasOwnProperty("_id");
        const expected = true;
        expect(actual).toEqual(expected);
    });
    it("Checks if the user objects has an name field", () => {
        const actual = createRandomUser().hasOwnProperty("name");
        const expected = true;
        expect(actual).toEqual(expected);
    });
    it("Checks if the user objects has an email field", () => {
        const actual = createRandomUser().hasOwnProperty("email");
        const expected = true;
        expect(actual).toEqual(expected);
    });
    it("Checks if the user objects has an points field", () => {
        const actual = createRandomUser().hasOwnProperty("claimablePoints");
        const expected = true;
        expect(actual).toEqual(expected);
    });
    it("Checks if the user objects has an membership field", () => {
        const actual = createRandomUser().hasOwnProperty("premiumSubscriber");
        const expected = true;
        expect(actual).toEqual(expected);
    });
    it("Checks if the user objects has an vehicle type field", () => {
        const actual = createRandomUser().hasOwnProperty("vehicleType");
        const expected = true;
        expect(actual).toEqual(expected);
    });
    it("Checks if the user objects has an vehicle color field", () => {
        const actual = createRandomUser().hasOwnProperty("vehicleColor");
        const expected = true;
        expect(actual).toEqual(expected);
    });
    it("Checks if the user objects has an VIN field", () => {
        const actual = createRandomUser().hasOwnProperty("vehicleVin");
        const expected = true;
        expect(actual).toEqual(expected);
    });
})

// - Make sure the correct datatype is being inserted into each field.
describe("Checks if the user object keys has all the correct values", () => {
    it("Checks if the id field has the correct datatype", () => {
        const actual = typeof createRandomUser()._id;
        const expected = "string";
        expect(actual).toEqual(expected);
    });
    it("Checks if the name field has the correct datatype", () => {
        const actual = typeof createRandomUser().name;
        const expected = "string";
        expect(actual).toEqual(expected);
    });
    it("Checks if the email field has the correct datatype", () => {
        const actual = typeof createRandomUser().email;
        const expected = "string";
        expect(actual).toEqual(expected);
    });
    it("Checks if the points field has the correct datatype", () => {
        const actual = typeof createRandomUser().claimablePoints;
        const expected = "number";
        expect(actual).toEqual(expected);
    });
    it("Checks if the subscription field has the correct datatype", () => {
        const actual = typeof createRandomUser().premiumSubscriber;
        const expected = "boolean";
        expect(actual).toEqual(expected);
    });
    it("Checks if the Type field has the correct datatype", () => {
        const actual = typeof createRandomUser().vehicleType;
        const expected = "string";
        expect(actual).toEqual(expected);
    });
    it("Checks if the Color field has the correct datatype", () => {
        const actual = typeof createRandomUser().vehicleColor;
        const expected = "string";
        expect(actual).toEqual(expected);
    });
    it("Checks if the VIN field has the correct datatype", () => {
        const actual = typeof createRandomUser().vehicleVin;
        const expected = "string";
        expect(actual).toEqual(expected);
    });
})
