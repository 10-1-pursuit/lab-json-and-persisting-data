const { createRandomProduct, randomFakeProduct } = require("./products")
const { writeJSONFile, readJSONFile } = require("./helpers.js")

//run: function to run our entire Command Line App
function run() {

    console.log("Welcome to our Product App!")
    let productsData = readJSONFile("./data", "products.json")
    //if file is empty -> Give us an empty Array

    productsData.push(createRandomProduct())

    writeJSONFile("./data", "products.json", productsData)

}

run()


/////// process object + process.argvsmh