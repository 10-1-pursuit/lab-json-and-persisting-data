const { createRandomCustomer } = require("./customers")
const {
    readJSONFile,
    writeJSONFile,
} = require("./helpers")

//how many messages

// Through the command line, a user should be able to choose whether to create one or many randomly generated messages.


// The messages should be read from a JSON file.


// Additional messages should be able to be added to the JSON file.

function run(){
    let customersData = readJSONFile("../data", "customers.json");
    if(process.argv[2]>0){
        for(let i = 0; i < process.argv[2]; i++){
            customersData.push(createRandomCustomer());
        }
    }
    writeJSONFile("../data", "customers.json", customersData);
}

run();