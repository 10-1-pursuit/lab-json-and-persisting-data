
const {createRandomProducts} = require("./products.js");
const {writeJSONFile, readJSONFile} = require("./helper.js");
const { read } = require("fs");

function run(){
    console.log(`Welcome to The Sneaker Generator App!!\n\n\n`)
    let productsData = readJSONFile("./data" , "products.json");
    productsData.push(createRandomProducts())

    writeJSONFile("./data", "products.json", productsData)
}
run()