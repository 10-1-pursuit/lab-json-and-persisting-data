const fs = require("node:fs")
// console.log(result)

function readJSONFile(path, fileName) {
    const collection = fs.readFileSync(`${path}/${fileName}`, "utf-8")
    // is it an empty JSON File or Not
    return collection ? JSON.parse(collection) : []
}
// console.log(readJSONFile(path, fileName))

function writeJSONFile(path, fileName, data) {
    data = JSON.stringify(data)
    return fs.writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" })
}


module.exports = {
    readJSONFile,
    writeJSONFile
}