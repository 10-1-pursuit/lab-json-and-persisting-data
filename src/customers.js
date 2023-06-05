const {faker} = require("@faker-js/faker") 

function createRandomCustomer(){
    const newCustomer = {
        id: faker.datatype.uuid(), 
        name: faker.name.fullName(), 
        memberNumber: faker.phone.number(), 
        dateOfLastVisit: faker.date.past(3)
    };
    return newCustomer;
}
console.log(createRandomCustomer())

module.exports = {
    createRandomCustomer
}