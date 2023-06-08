const { createRandomCustomer } = require("./customers")
const { readJSONFile, writeJSONFile } = require("./helpers")

function run(){
    let customersData = readJSONFile("./data", "customers.json");
    if(process.argv[2]>0){
        for(let i = 0; i < process.argv[2]; i++){
            customersData.push(createRandomCustomer());
        }
    }
    writeJSONFile("./data", "customers.json", customersData);
}

run();
