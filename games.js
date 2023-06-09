const { faker } = require("@faker-js/faker")

// console.log(faker)

//Generates a random video game
function randomVideoGameGenerator() {
    const randomGame = {
        id: faker.datatype.uuid(),
        title: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
        // description: faker.commerce.productDescription(),
        price: faker.commerce.price(10, 80, 2, "$"),
        inStock: faker.datatype.boolean(),
        gameRating: faker.datatype.number(10)

        // uniqueId - "string"
        // gameTitle - "string"
        // gameDescription - "string"
        // price - "number"
        // inStock - "boolean"
    }
    return randomGame;
}
// console.log(randomVideoGameGenerator())


// Based on the number that it is given, this function creates/generates multiple video games
function randomGameFactory(number) {
    const products = [];
    for (let i = 0; i < number; i++) {
        products.push(randomVideoGameGenerator());
    }
    return products;
}


module.exports = { randomVideoGameGenerator, randomGameFactory };