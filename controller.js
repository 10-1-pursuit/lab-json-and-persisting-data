let data = require("./data/products.json")

//console.log(data)
const inform = console.log




function index(jsonData){
    let theCollection = jsonData.map( (objects) => objects.album + " " + objects.artist + objects.price  + objects.rating + " ⭐️'s").join("\n")
  return (theCollection) ? theCollection : "there is an error with your array"
};


function show(jsonData, targetId){
    let album = jsonData.find((object) => object.id === targetId)
    let view = album.rating + "⭐️ " + album.productGenre + " " + album.album + " " + album.artist
    return (view) ? view : "No Album found"
}




function updateObject(jsonData, targetId){
    let rating = process.argv[2]
    const albumToChange= jsonData.find((albumsObj) => albumsObj.id === targetId )
    //inform(albumToChange)
     (albumToChange) ? albumToChange.map((theChangedAlbum) => (theChangedAlbum.rating = rating )) : "invalid"
     
     return albumToChange
}



module.exports = {

index,
show


}