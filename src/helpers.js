const fs = require("node:fs")

const path = "./data"
const fileName = "customers.json"

function readJSONFile(path, fileName){
    const collection = fs.readFileSync(`${path}/${fileName}`, "utf-8");
    return collection ? JSON.parse(collection): [];
}

function writeJSONFile(path, fileName, data){
    data = JSON.stringify(data);
    fs.writeFileSync(`${path}/${fileName}`, data, {encoding: "utf-8"})
}

module.exports = {
    readJSONFile,
    writeJSONFile
}