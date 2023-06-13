const { faker } = require("@faker-js/faker")

//console.log(faker)

function createRandomCandle(){
    const randomCandle= {
        _id: faker.datatype.uuid(),
        name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
        description: faker.commerce.productDescription(),
        brand: faker.company.name(),
        price: faker.commerce.price(10, 200, 2, "$"),
        currency: "USD",
        inStock: faker.datatype.boolean(),
        attributes: {
            material: faker.commerce.productMaterial(),
            color: faker.vehicle.color(),
        },
    };

    return randomCandle
};

  

  module.exports = {createRandomCandle}