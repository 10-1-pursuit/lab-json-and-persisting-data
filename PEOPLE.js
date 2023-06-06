const { faker } = require("@faker-js/faker");

//focused on generating a client data base

function getClientCount() {

    const client = {
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCodeByState(),
      }
  }
  console.log("IT WORKS NOW ",client)
  return client;
}

// function getClientCount(count) {
//     const clients = [];

//     for (let c = 0; c < count; c++) {


//     }
//         //clients.push(client);
// }
console.log(getClientCount());

module.exports = {
  getClientCount
};
