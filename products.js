//  npm install @faker-js/faker@7 --save-dev


const { faker } = require("@faker-js/faker")

// const { Ken } = { name: "Ken" }

// console.log( faker )

const randomFakeProduct = () => myObj ={
    _id: faker.datatype.uuid(),
    name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
    troy: "kenneth"
}

console.log(randomFakeProduct())


module.export = {
    randomFakeProduct
}