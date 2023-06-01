const {faker} = require("@faker-js/faker")

// shoe store member random generator

function createRandomProducts(){
    const newProduct = {
        id: `${faker.datatype.uuid()}`,
        name: `${faker.name.firstName()} ${faker.name.middleName()} ${faker.name.lastName()}`,
        over21: `${faker.datatype.boolean()}`,
        numberOfShoesPurchased: `${faker.datatype.number()}`,
    }
return newProduct
}
console.log(createRandomProducts())

module.exports ={
    createRandomProducts
}