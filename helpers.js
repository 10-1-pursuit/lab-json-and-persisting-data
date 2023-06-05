const fs = require("fs");
//const { readFileSync, writeFileSync } = require("node:fs")

const path = "./data";
const prodFile = "products.json";


const collection = fs.readFileSync(`${path}/${prodFile}`, { encoding: "utf-8" })
console.log("Im before the collection", collection)

function readJSONFile(path, prodFile) {

  const theCollection = collection ? JSON.parse(collection) : [];
  return theCollection;
}

function writeMusicToFile(path, prodFile, data) {

  data = JSON.stringify(data, null, 2)
  console.log("Im the Data:", data)

  fs.writeFileSync(`${path}/${prodFile}`, data, { encoding: "utf-8" })
  console.log("X ;} ",`${path}/${prodFile}` , prodFile, data)
}


module.exports = { readJSONFile, writeMusicToFile }