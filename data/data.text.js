const {generateRandomDestinations, writeDestinationsToFile} = require('./dataGenerator');
const fs = require("node:fs")

function bookTrip(){
    //load the destination from the file
    const destinations = require('../data/destinations.json'); 
    

    //random selecting a destination
    const randomIndex = Math.floor(Math.random() * destinations.length);
    const destination = destinations[randomIndex];

    if (destination) {
        console.log(`Booking a trip to ${destination.name}`)
    } else {
        console.log(`No trips are available at this moment`)
    }   
}

// to generate random destination
//const tripRandom = generateRandomDestinations();
    
// to file the destination
//writeDestinationsToFile(tripRandom,'../data/destinations.json');

bookTrip()

module.exports = {bookTrip}