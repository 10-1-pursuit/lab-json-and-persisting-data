const { faker } = require("@faker-js/faker")


function newAlbums(){
    const newProduct = {
        
        id:faker.datatype.uuid(),
        productGenre: faker.music.genre(),
        artist: faker.name.fullName() ,
        title: faker.music.songName(),
        online: faker.datatype.boolean(),
        newAlbum: faker.datatype.boolean(),
        price:faker.commerce.price(15, 40, 2, "$"),
        county: faker.address.county(),
        rating: faker.datatype.number({min: 1 , max:5}),

        tagswords:faker.lorem.words(40)
    };
    return newProduct;
};

function musicFactory(num){

    const factory = [];
    for (let i = 0; i < num; i++) {
        factory.push(newAlbums())
    };
    console.log("this is the factory;" , factory)
    return factory
};
//console.log(musicFactory(process.argv[2]))
//console.log(createANewObject())

module.exports = { musicFactory, newAlbums }