const { createRandomHacker, randomHackerGenerator } = require("./Data/hacker.js")
const { writeJSONFile, readJSONFile } = require("./helpers.js")

//run: function to run our entire Command Line App
function run() {
    let writeToFile = false;
    let productsData = [];

    console.log("Welcome to our Product App!")
    let productsData = readJSONFile("./data", "hackerBeware.json")
    //if file is empty -> Give us an empty Array

    productsData.push(createRandomHacker())

    writeJSONFile("./data", "hackerBeware.json", productsData)

}

run()


function filterByResolved(hacker) {
    for (let key in hacker) {
        if (key.isResolved === true) {
            filteredHacks.push(hacker)
        }
    }
    return filteredHacks;
}