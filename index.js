const { getClientCount } = require("./PEOPLE");
const { writeClientsToFile, readJSONFile } = require("./helpers");

const numberOfClients = 30;
const clients = getClientCount(numberOfClients);

function run() {
  let peopleData = readJSONFile("./data", "clients.json");
  peopleData.push(...clients);
  writeClientsToFile("./data", "clients.json", peopleData);
  console.log(peopleData);
}

run();

//const newClient = process.argv[2]