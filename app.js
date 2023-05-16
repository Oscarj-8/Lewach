const { readFileSync, writeFileSync } = require("fs");

// Reading the files
const firstOne = readFileSync("./content/first.txt", "utf-8");
const secondOne = readFileSync("./content/second.txt", "utf-8");

console.log(firstOne + ". " + secondOne);

// Writing new file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the sync of first one and second one: ${firstOne}, ${secondOne}`
);
