console.log("Hey!!!")

const {createRandomCandle} = require("./candles.js")

const {writeJSONFile, readJSONFile} = require("./helpers.js")

function run(){
    console.log("Welcome to Cute Candles 🕯️")
    let candlesData = readJSONFile("./data", "candles.json")
    candlesData.push(createRandomCandle())
    writeJSONFile("./data", "candles.json", candlesData)
}

run()