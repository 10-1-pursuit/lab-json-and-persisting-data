const { faker } = require("@faker-js/faker")

const randomCars = () => {
    const newCars = {
        name: `${faker.vehicle.manufacturer()} ${faker.vehicle.model()}`,
        vin: faker.vehicle.vin(),
        color: faker.vehicle.color(),
        fuel: faker.vehicle.fuel(),
        type: faker.vehicle.type(),
        carsSold: faker.random.numeric(5),
        inStock: faker.datatype.boolean(),
        price: faker.commerce.price(75000, 125000, 2, "$"),
        currency: "USD",
    }
    return newCars
}

function randomNumberOfCars(number) {
    const cars = [];
    for (let i = 0; i <= number; i++) {
      cars.push(randomCars());
    }
    return cars;
  }

module.exports = {randomCars, randomNumberOfCars}