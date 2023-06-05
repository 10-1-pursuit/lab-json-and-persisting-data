const {faker} = require("@faker-js/faker") 

function createRandomCustomer(){
    const newCustomer = {
        id: faker.datatype.uuid(), 
        name: faker.name.fullName(), 
        memberNumber: faker.phone.number(), 
        dateOfLastVisit: faker.date.past(3)
    };
    console.log(`Welcome back, ${newCustomer.name}. Last visit on ${newCustomer.dateOfLastVisit}`)
    return newCustomer;
}

module.exports = {
    createRandomCustomer
}