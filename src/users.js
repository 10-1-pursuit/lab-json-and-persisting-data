const { faker } = require("@faker-js/faker");

function createRandomUser() {

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName, lastName);
    const name = `${firstName} ${lastName}`

    const user = {
        _id: faker.datatype.uuid(),
        name,
        email,
        claimablePoints: faker.datatype.number(5000),
        premiumSubscriber: faker.datatype.boolean(),
        vehicleType: faker.vehicle.vehicle(),
        vehicleColor: faker.vehicle.color(),
        vehicleVin: faker.vehicle.vin(),
    }
    return user;
}

function randomUserCreator(number) {
    const users = [];
    for (let i = 0; i < number; i++) {
        users.push(createRandomUser());
    }
    return users;
}

module.exports = {createRandomUser, randomUserCreator};