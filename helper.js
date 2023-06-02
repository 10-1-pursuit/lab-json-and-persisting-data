const fs = require("node:fs")
const path = "./data"
const fileName = "cars.json"

function readJSONFile(path, fileName){
    const carSet = fs.readFileSync( `${path}/${fileName}`, "utf-8" )
    return carSet ? JSON.parse(carSet) : []

}

function writeJSONFile(path, fileName, data){
    data = JSON.stringify(data)
    fs.writeFileSync(`${path}/${fileName}`, data, {encoding: "utf-8"})
}

module.exports = {
    readJSONFile,
    writeJSONFile
}