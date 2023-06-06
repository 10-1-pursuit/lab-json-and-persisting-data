const { getClientCount } = require("../PEOPLE");

//describe(functionToTest),(arguments) => {}
// describe(functionName),() => {}

// const client =  {
//  id: faker.datatype.uuid(),
// name: faker.name.fullName(),
// email: faker.internet.email(),
// phone: faker.phone.number(),
// address: {
//   street: faker.address.streetAddress(),
//   city: faker.address.city(),
//   state: faker.address.state(),
//   zipCode: faker.address.zipCodeByState(),
// };

describe("getClientCount()", () => {
  it(
    "should return a client obj with the following keys: 'id', 'name', 'email', 'phone', and 'address'"
  ,
    () => { expect(getClientCount())});
});
