const { log } = require("console");
const { readFileSync, writeFileSync } = require("fs");
console.log("Starting");

// reading file contents
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// writing contents to a file

writeFileSync("./content/result-syc.txt", `Hey, This is ${first} ${second}`);
console.log("Done with this task");
console.log("Starting next task");
