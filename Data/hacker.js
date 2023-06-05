const { faker } = require("@faker-js/faker")
const { fs } = require('fs')

function createRandomHacker() {
    const hacker = {
        _id: faker.datatype.uuid(),
        hackerName: `${faker.adjective} Boron Byson`,
        messageTitle: `${hacker.adjective} ${hacker.abbreviation} on git.branch`,

        messageContent: lorem.paragraph,
        isResolved: faker.datatype.boolean(),
        messageResponse: hacker.phrase.date,
        numberOfUpvotes: 800165,

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