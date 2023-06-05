
const { createUniqueId } = require("./uniqueId.js")
const { writeJSONFile, readJSONFile } = require("./helper.js")

function run() {


    let idData = readJSONFile("./data", "data.json")

    idData.push(createUniqueId())

    writeJSONFile("./data", "data.json", idData  )

}

run()