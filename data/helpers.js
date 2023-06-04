const fs = require("node:fs")
const path = "./data"
const fileName = "products.json"
const list = fs.readFileSync( `${path}/${fileName}` , "utf-8" ) 




// function readJsonFile(nineNine){
    
//     const list = fs.readFileSync( nineNine, "utf-8" ) 
    
//     return list ? JSON.parse(list) : [];
// }


function writeJsonFile(nineNine){
    
   const data = JSON.stringify(nineNine , null, 2)
    
    fs.writeFileSync( `products.json`, data , { encoding: "utf-8"} )

};



module.exports = {
    // readJsonFile,
    writeJsonFile,
};