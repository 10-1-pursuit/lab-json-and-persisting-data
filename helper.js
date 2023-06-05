const fs = require("node:fs")

//const path = "./data"
// const fileName ="uniqueId.json"


function readJSONFile(path, fileName){
    const collect = fs.readFileSync(`${path}/${fileName}`, "utf-8")
   
if (collect){
    return JSON.parse(collect)
}
return []
}


function writeJSONFile(path, fileName,data){
    data = JSON.stringify(data)
    fs.writeFileSync(`${path}/${fileName}`, data, {encoding:"utf-8"} )
}



module.exports ={
    readJSONFile,
    writeJSONFile
}