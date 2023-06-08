const { randomVideoGameGenerator, randomGameFactory } = require("./games.js");

const { readJSONFile, writeJSONFile } = require("./helper");

function run() {
    let games = readJSONFile("./data", "games.json");
    console.log(games);
    if (process.argv[3]) {
        games.push(...randomGameFactory(process.argv[3]));
    } else {
        games.push(randomVideoGameGenerator());
    }
    writeJSONFile("./data", "games.json", games);
}

run();