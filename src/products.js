const { faker } = require("@faker-js/faker") // Imported package to generate fake data
//**For E-commerce store**
// Generate a single product

function generateProduct() {


    const newProducts = {

        id: faker.datatype.uuid(), // Generate a unique id
        productName: `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${faker.commerce.product()}`, // Use a few faker methods to generate a realistic product name
        price: parseFloat(faker.commerce.price()), // Generate a random price and convert it to floating-point number using parse. (parsefloat analyzes string and returns a numerical value that can be a decimal.)
        category: faker.commerce.department(), // Generate a category
        isAvailable: faker.datatype.boolean(), // Generate random boo lean (true or false)
        description: faker.lorem.paragraph(), // Generate a random paragraph
        rating: faker.datatype.number({ min: 1, max: 5 }) // Generate a number between 1-5

    }

    return newProducts;

}

function generateProducts(count) { // use count as a parameter to specify the number of products to generated
    const products = [];
    for (let x = 0; x < count; X++) { // For loop for count
        const product = generateProduct(); // Call generateProduct function (count) amount of times and
        products.push(product); // Pushes the product to the empty products array
    }
    return products;
}



module.exports = {
    generateProduct,
    generateProducts
}