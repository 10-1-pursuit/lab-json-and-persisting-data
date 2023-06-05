
const {createRandomProduct,randomProductFactory} = require("./products.js");
const {writeJSONFile, readJSONFile} = require("./helper.js");
const { read } = require("fs");

function run(){
    console.log(`Welcome to The Sneaker Generator App!!\n\n\n`)
    let products = readJSONFile("./data" , "products.json");
    if (process.argv[3]) {
        products.push(...randomProductFactory(process.argv[3]));;
      } else {
        products.push(createRandomProduct());
}
writeJSONFile("./data", "products.json", products)
}
run()