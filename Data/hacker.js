const { faker } = require("@faker-js/faker")
const { fs } = require('fs')

function createRandomHacker() {
    const hacker = {
        _id: faker.datatype.uuid(),
        hackerName: faker.hacker.adjective(),
        messageTitle: faker.hacker.adjective() + faker.hacker.abbreviation() + "on git.branch",

        messageContent: faker.lorem.paragraph,
        isResolved: faker.datatype.boolean(),
        messageResponse: faker.phrase,
        numberOfUpvotes: faker.number,

    }
    return hacker;
}

function randomHackerGenerator() {
    const hackers = [];
    for (let i = 0; i < number; i++) {
        hackers.push(createRandomHacker)
    }
    return hackers;
}





module.exports = {

    createRandomHacker,
    randomHackerGenerator
}