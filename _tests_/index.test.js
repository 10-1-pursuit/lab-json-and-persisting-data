const { generateProduct, generateProducts, writeProductsToFile } = require('../index.js');
const fs = require("node:fs")

describe('generateProduct', () => {

    // Test if the function returns an object with expected properties. 
    it('should return an object with expected properties', () => {
        const product = generateProduct();
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('productName');
        expect(product).toHaveProperty('price');
        expect(product).toHaveProperty('category');
        expect(product).toHaveProperty('isAvailable');
        expect(product).toHaveProperty('description');
        expect(product).toHaveProperty('rating');
    });
});

describe('generateProducts', () => {

    // Test if the function generates the specified number of products
    it('should generate the specified number of products', () => {
       const count = 5;
       const products = generateProducts(count);
       expect(products).toHaveLength(count);
    });
});

describe('writeProductsToFile', () => {

    // Test if writeProductsToFile works as intended
    it('should create a file and write product data inside', () => {

       // Create an array of sample products
       const products = [
        {
          "id": "9623fa84-207f-4d03-b37f-cc9fe1fd8d7f",
          "productName": "Elegant Frozen Sausages",
          "price": 919,
          "category": "Music",
          "isAvailable": true,
          "description": "Soluta autem rerum ducimus eos corrupti. Repudiandae similique ipsum voluptas quas impedit laudantium maxime laudantium eum. Vero animi nesciunt aliquid expedita unde vel fuga corporis. Tempore odio eum nulla. Provident quaerat sunt corporis maiores perferendis ipsam harum necessitatibus voluptas. Vitae sapiente quod ab illo voluptas fugiat saepe.",
          "rating": 4
        },
        {
          "id": "d51195ff-5aa1-4cdd-94a4-6b67ee6f7c0c",
          "productName": "Ergonomic Metal Chicken",
          "price": 838,
          "category": "Jewelery",
          "isAvailable": false,
          "description": "Beatae impedit officiis occaecati reiciendis fuga ullam. Ex minima perferendis cupiditate est earum. Culpa omnis natus alias. Quos minus ex.",
          "rating": 4
        },
        {
          "id": "ceef9801-fe23-415b-a9c1-eb89b9cb648a",
          "productName": "Recycled Wooden Bike",
          "price": 867,
          "category": "Outdoors",
          "isAvailable": true,
          "description": "Dolorum aut recusandae id illo amet nesciunt eligendi voluptas nihil. Doloremque numquam veritatis. Culpa explicabo provident deserunt hic. Qui laudantium odit.",
          "rating": 3
        }
    ];
    
    writeProductsToFile(products); // calls writeProductsToFile function with the sample products from above and checks the file creation and data

    const fileExists = fs.existsSync('data.json'); // Checks if the file data.json exists. If true then it means that the writeProductsToFile function successfuly created the file and then returning a boolean value which is why i wrote .toBe(true)
    expect(fileExists).toBe(true); // This checks if the file exists as expected with .toBe(true)

    const data = fs.readFileSync('./data.json', 'utf-8');  // Read the content of the file data.json using fs.readFileSync and store it into the variable data. This will contain the content of the file as a string. utf-8 indicates that the file should be read as UTF-8 encoded text. By using the encoding, the content of the file is read and returned as a string
    const parsedData = JSON.parse(data); // data is a string so JSON.parse puts the string into a javascript object because we need the object to be compared to the original sample products array and store it into the variable parsedData

    expect(parsedData).toEqual(products); // This expects the javascript object returned to strictly equal products(original sample array) using .toEqual
    });
});