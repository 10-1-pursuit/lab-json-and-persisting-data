const { createRandomHacker, randomHackerGenerator } = require("./Data/hacker.js")
const { writeJSONFile, readJSONFile } = require("./helpers.js")

//run: function to run our entire Command Line App
function run() {
    let writeToFile = false;
    let filteredHacks = [];

    console.log("Welcome to our Hackers App!")
    let hacksData = readJSONFile("./data", "hackerBeware.json")
    //if file is empty -> Give us an empty Array

    filteredHacks.push(createRandomHacker())

    writeJSONFile("./data", "hackerBeware.json", hacksData)

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

module.exports = {


}