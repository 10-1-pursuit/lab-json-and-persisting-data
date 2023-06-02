const { createRandomUser, randomUserCreator } = require("./users.js");
const { writeJSONFile, readJSONFile } = require("./helpers.js")

function run() {
    let newUsers = readJSONFile("./data", "users.json")
    console.log(newUsers);
    if (process.argv[3]) {
        newUsers.push(randomUserCreator(process.argv[3]));
    } else {
        newUsers.push(createRandomUser());
    }
    writeJSONFile("./data", "users.json", newUsers);
}

run();