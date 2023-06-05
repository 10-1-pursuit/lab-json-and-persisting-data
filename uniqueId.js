const { faker } = require("@faker-js/faker")

const unique_Id = {
    id: faker.datatype.uuid()
}

function createUniqueId() {
    const randomId = {
        id: faker.datatype.uuid(),
        username: faker.internet.userName()

    }
    return randomId
}



module.exports={createUniqueId}