const { faker } = require("@faker-js/faker");

const createHackerForum = () => {
    console.log("...Forum Review!");
    hackerForum = {
      _id: faker.datatype.uuid(),
      hackerName: `${faker.hacker.adjective()} ${faker.hacker.noun()} ${faker.animal.insect()}`,
      messageTitle: `Help with ${faker.hacker.adjective()} ${faker.hacker.abbreviation()} on ${faker.git.branch()}.`,
      messageContent: `${faker.lorem.paragraph()}.`,
      isResolved: faker.datatype.boolean(),
      messageResponse : `${faker.hacker.phrase()}. ${faker.date.recent()}.`,
      numberOfUpvotes: faker.random.numeric()
    };
    return hackerForum;
  }
  //console.log(createHackerForum())
  
  const randomCreateHackerForum = (number) => {
    const hackerForums = [];
    for (let i = 0; i < number; i++) {
      hackerForums.push(createHackerForum());
    }
    return hackerForums;
  }
  //console.log(randomCreateHackerForum())
  
  
  module.exports = { createHackerForum, randomCreateHackerForum };