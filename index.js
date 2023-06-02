const fs = require("node:fs") // File system is a built-in Node module which allows you to read and write from files
const{faker} = require("@faker-js/faker") // Imported package to generate fake data

//**For E-commerce store**

// Generate a single product
function generateProduct() {
    const id = faker.datatype.uuid(); // Generate a unique id
    const productName = `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${faker.commerce.product()}` // Use a few faker methods to generate a realistic product name
    const price = parseFloat(faker.commerce.price()); // Generate a random price and convert it to floating-point number using parse. (parsefloat analyzes string and returns a numerical value that can be a decimal.)
    const category = faker.commerce.department(); // Generate a category
    const isAvailable = faker.datatype.boolean(); // Generate random boolean (true or false)
    const description = faker.lorem.paragraph(); // Generate a random paragraph
    const rating = faker.datatype.number({ min: 1, max: 5}) // Generate a number between 1-5 

    // Return the generated objects
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

// Generate multiple products
function generateProducts(count) { // use count as a parameter to specify the number of products to generated
    const products = [];
    for( let x = 0; x < count; x++) { // For loop for count
        const product = generateProduct(); // Call generateProduct function (count) amount of times and 
        products.push(product); // Pushes the product to the empty products array
    }
    return products;
}

// Write products to data.JSON file
function writeProductsToFile(products) {
    const data = JSON.stringify(products, null, 2); // Converts products to a JSON string. Used null as a "placeholder"so all properties of products are included in JSON string. 2 is used to properly space the JSON string.
    fs.writeFileSync('data.json', data); // fs.writeFileSync() is a method for writing data to a file. It takes two parameters (file path) and (data to be written), this will overwrite data.json file
}

const generatedProducts = generateProducts(10);
console.log(generatedProducts);
writeProductsToFile(generatedProducts);

module.exports = {
    generateProduct,
    generateProducts,
    writeProductsToFile
}