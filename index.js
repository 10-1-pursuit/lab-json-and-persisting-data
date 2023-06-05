const { createRandomHacker, randomFakeProduct } = require("./data/hackerBeware.json")
const { writeJSONFile, readJSONFile } = require("./helpers.js")

//run: function to run our entire Command Line App
function run() {

    console.log("Welcome to our Product App!")
    let productsData = readJSONFile("./data", "hackerBeware.json")
    //if file is empty -> Give us an empty Array

    productsData.push(createRandomHacker())

    writeJSONFile("./data", "hackerBeware.json", productsData)

}

run()

let filteredHacks = [];
function filterByResolved(hacker) {
    for (let key in hacker) {
        if (key.isResolved === true) {
            filteredHacks.push(hacker)
        }
    }
    return filteredHacks;
}

