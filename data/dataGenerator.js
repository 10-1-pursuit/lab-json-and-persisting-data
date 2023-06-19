const fs = require("node;fs") // file system is a built in node module which allows you to read and write from files
const {faker} = require("@faker-js/faker") //imprted package to genrate fake data

//**  for travel excursion 



function travelProduct = () {
    const id = faker.datatype.uuid();  // generate a unique id
    const productName =`${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} $(faker.commerce.product()}` //use a few faker methods to generate a relaistic product name
    const price = parseFloat(faker.commerce.price()); //generate a random price and convert it to floating point number using parse. (parsefloat anaylzes string and returns a numerical value that can be a decimal.)
    const category = faker.commerce.department(); // Generate a category
    const isAvailable = faker.datatype.boolean(); // generate random boolean 
    const description = faker.lorem.paragraph(); // generate a random paragraph
    const rating = faker.datatype.number {min: 1, max: 5} // generate a number between 1-5

 // return the generated objects
 return {
  id,
  productName,
  price,
  category,
  isAvailable,
  description,
  rating
 }
}

// console.log("randomFakeProduct: ", randomFakeProduct)

//generate multiple products
function travelProducts(supplie) {
    const products = [];
    for (let i = 0; i < supplie; i++) { 
        const product = travelProduct()// call travelproduct function  supplie amount of times
        products.push(product)// pushes the supplies to the empty products array
         }
    return products;
}

//write products to data.JSON file
function writeDestinationsToFile(products) {
    const data = JSON.stringify(products, null, 2); // converts products to a JSON string. Used null as a "placeholder" so all properites of products are included in JSON string. 2 is used to properly place the JSOn string]
    fs.writeFileSync('data.json', data);// fs.writeFileSynce() is a method for writing data to a file. It takes two parametes (file path) and (data to be written), this will overwrite data. json file
}

const travelProducts = travelProducts(10);
console.log (travelProducts)
writeDestinationsToFile(travelProducts);

module.exports = {
    travelProduct
    travelProducts
    writeDestinationsToFile
}