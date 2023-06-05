//const fs = require("node:fs") // File system is a built-in Node module which allows you to read and write from files

const fs = require("node:fs")
// const pathway = "./data";
// const prodFile = "products.json";




function readJSONFile(pathway, prodFile) {

    const collection = fs.readFileSync(`${pathway}/${prodFile}`, "utf-8")

    return collection ? JSON.parse(collection) : [];

}

function writeJSONFile(pathway, prodFile, data) {

    data = JSON.stringify(data)

    return fs.writeFileSync(`${pathway}/${prodFile}`, data, { encoding: "utf-8" })

}

module.exports = {
    readJSONFile,
    writeJSONFile
}