const fs = require("fs");

function readJSONFile(path, fileName) {
  const fullPath = `${path}/${fileName}`;
  let collection = [];

  if (fs.existsSync(fullPath)) {
    const fileData = fs.readFileSync(fullPath, "utf-8");
    collection = JSON.parse(fileData);
  }
console.log("COLLECTION", collection)
  return collection;
}
console.log(readJSONFile())



function writeClientsToFile(path, fileName, clients) {
//   const jsonData = JSON.stringify(clients, null, 2);
//   fs.writeFileSync(`${path}/${fileName}`, jsonData, { encoding: "utf-8" });

  clients = JSON.stringify(clients)

  fs.writeFileSync(`${path}/${fileName}`, clients, {encoding: "utf-8"})
}
console.log("hi",writeClientsToFile())

module.exports = {
  readJSONFile,
  writeClientsToFile,
};



