const carsData = require("../data/cars.json")

const findNameOfKeysInArr = (carsData) => {
    let names = []
    names.push(Object.keys(carsData[0]))
    return names.toString()
}

const getPriceOfCar = (carsData, car) => {
    for (const auto of carsData){
        if (car === auto.name){
            return auto.price
        }
    }
}

module.exports = {findNameOfKeysInArr, getPriceOfCar}