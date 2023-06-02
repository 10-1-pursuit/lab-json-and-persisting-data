const fs = require('fs');
const faker = require('faker');

const randomUser = {
  hackerName: `${faker.hacker.adjective()} ${faker.hacker.abbreviation()} ${faker.animal.type()}`,
  messageTitle: `Help with ${faker.hacker.adjective()} ${faker.hacker.abbreviation()} on ${faker.git.branch()}`,
  messageContent: faker.lorem.paragraph(),
  isResolved: faker.datatype.boolean(),
  messageResponse: faker.hacker.phrase(),
  date: faker.date.recent(),
  numberOfUpvotes: faker.datatype.number()
};

console.log(randomUser);
