const {faker} =require("@faker-js/faker")
const { readJsonFile, writeJsonFile }  =require("./data/helpers")
//99 CENT STORE
 


function nineNineCentItem(){

    const idenity = faker.datatype.uuid();
    const name = `${faker.commerce.productAdjective()} ${faker.commerce.product()}`
    const bio = `${faker.commerce.productDescription()}`
   const location = `${faker.commerce.department()}`
 const material = `${faker.commerce.productMaterial()}`
  const price = `${faker.commerce.price()}`
  const expiration = `${faker.date.future()}`
 const inStock = `${faker.datatype.boolean()}`

 return {
    idenity,
    name,
    bio,
    location,
    material,
    price,
    expiration,
    inStock
 }
};



function nineNineCentItems(place , thing ){
    myArr = [];
    for (let x = 0; x < place; x++){
     const newTim = nineNineCentItem()
     myArr.push(newTim);
    }
    return myArr;
};




const createProduct = nineNineCentItems(5)

console.log(createProduct);
writeJsonFile(createProduct)


module.exports = {
    nineNineCentItem,
    nineNineCentItems,
};

   