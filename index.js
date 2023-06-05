const { musicFactory, newAlbums } = require('./Products')
const { readJSONFile, writeMusicToFile } = require("./helpers")
const { index, show } = require("./controller")
const inform = console.log



function run() {

  let musicData = readJSONFile("./data", "products.json")
  writeMusicToFile("./data", "products.json", musicData)
  musicData.push(newAlbums())
  
  console.log("TendingMusic App")

 
  inform(show(musicData))



}

run() 