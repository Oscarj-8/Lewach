const { readFileSync, writeFileSync } = require("fs");

// reading file contents
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// writing contents to a file

writeFileSync("./content/result-syc.txt", `Hey, This is ${first} ${second}`);
