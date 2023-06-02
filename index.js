const {randomCars, randomNumberOfCars} = require("./cars")
const {writeJSONFile, readJSONFile} = require("./helper")

const run = () => {
    console.log("Welcome to Oscar's Garage!");
    let carData = readJSONFile("./data", "cars.json");
    console.log(carData);
    if (process.argv[3]){
        carData.push(...randomNumberOfCars(process.argv[3]));
    } else {
        carData.push(randomCars());
    }
    writeJSONFile("./data", "cars.json", carData);
}
run()