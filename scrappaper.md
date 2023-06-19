// limiting the amount of things that my functions can do
// my app idea is traveling
 // unique id, string, boolean, number

// // importing faker for fake data set
// const faker = require("faker"); 
// const fs = require('fs');

// //generating a unique id using faker uuid
// function generateUniqueId(){
//     return faker.datatype.uuid();
// }
// //looking up cities by name using the string dataset
// function generateDestinationName(){
//     return faker.address.city();
// }
// //using dataset to get a random boolean for true or false is featured
// function generateIsFeatured(){
//     return faker.random.boolean();
// }

// //using faker to generate a number rating 
// function generateRating(){
//     return faker.random.number({ min: 1, max: 5});
// }

// //generating random destinations using the helpers 
// function generateRandomDestinations(){
//     const destinations = []
//     for (let i = 0; i < 10; i++){
//         const destination = {
//             id: generateUniqueId(),
//             name: generateDestinationName(),
//             isFeatured: generateIsFeatured(),
//             rating: generateRating(),
//         }
//         destinations.push(destination);
//     }
//     return destinations;
// }

// //creating a function that will file destinations 
// function addDestintionsToFile(destinations, filename){
//     const data = JSON.stringify(destinations, null, 2)
//     //converting destinations array into a formatted string (JSON), the null is used to exclude the JSON replacer function, 2 is double space into the data file.
//     fs.writeFileSync(filename, data) 
//     // it writes the json data to file with the file name, it use the fs module writefilesync method which is a sychronize operation that block execution until the file write is complete.
//     console.log(`Destinations data written into ${filename}`)
// }
// module.exports = { generateUniqueId, generateDestinationName,generateIsFeatured, generateRating, generateRandomDestinations, addDestintionsToFile  }