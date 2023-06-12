const { createHackerForum, randomCreateHackerForum } = require("./hackerForum");
const { writeJSONFile, readJSONFile } = require("./helpers");

const run = () => {
  let hackerForums = readJSONFile("./data", "hackerForums.json");
  console.log(hackerForums);
  (process.argv[3]) ? 
  hackerForums.push(...randomCreateHackerForum(process.argv[3])) : 
  hackerForums.push(createHackerForum());
  writeJSONFile("./data", "hackerForums.json", hackerForums);
}

run();