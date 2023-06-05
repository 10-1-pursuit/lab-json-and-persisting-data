const {faker} = require("@faker-js/faker")

// shoe store member random generator

function createRandomProduct(){
    const newProduct = {
        id: `${faker.datatype.uuid()}`,
        name: `${faker.name.firstName()} ${faker.name.middleName()} ${faker.name.lastName()}`,
        over21: `${faker.datatype.boolean()}`,
        numberOfShoesPurchased: `${faker.datatype.number()}`,
    }

return newProduct
}
function randomProductFactory(number) {
    const products = [];
    for (let i = 0; i < number; i++) {
      products.push(createRandomProduct());
    }
    return products;
  }
  
  


module.exports ={
    createRandomProduct,
    randomProductFactory
}