// Generate multiple products
const fs = require("node:fs")
const { generateProduct, generateProducts } = require("./src/products.js")
const { writeJSONFile, readJSONFile } = require("./src/helpers.js")
const pathway = "./data";
const prodFile = "products.json";

function run() {

    let productsData = readJSONFile(pathway, prodFile)

    if (process.argv[3]) {
        productsData.push(generateProducts(process.argv[3]))
    } else {
        productsData.push(generateProduct())
    }

    writeJSONFile(pathway, prodFile, productsData)
}

run()


