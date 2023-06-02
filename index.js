



function generateMessage() {
  const hackerName = `${faker.hacker.adjective()} ${faker.hacker.abbreviation()} ${faker.animal.animal()}`;
  const messageTitle = `Help with ${faker.hacker.adjective()} ${faker.hacker.abbreviation()} on ${faker.git.branch()}`;
  const messageContent = faker.lorem.paragraph();
  const isResolved = faker.datatype.boolean();
  const messageResponse = faker.hacker.phrase();
  const date = faker.date.recent();
  const numberOfUpvotes = faker.datatype.number();

  return {
    hackerName,
    messageTitle,
    messageContent,
    isResolved,
    messageResponse,
    date,
    numberOfUpvotes
  };
}
function createMessage() {
  const newMessage = generateMessage();
  const messages = JSON.parse(fs.readFileSync('data.json'));
  messages.push(newMessage);
  fs.writeFileSync('data.json', JSON.stringify(messages, null, 2));
}

function createMessages(count) {
  const messages = [];
  for (let i = 0; i < count; i++) {
    messages.push(generateMessage());
  }
  const existingMessages = JSON.parse(fs.readFileSync('data.json'));
  const updatedMessages = existingMessages.concat(messages);
  fs.writeFileSync('data.json', JSON.stringify(updatedMessages, null, 2));
}

module.exports = {
  createMessage,
  createMessages
};
