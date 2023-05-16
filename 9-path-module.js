const path = require("path");

// method returns what separator the computer uses
console.log(path.sep);

// method that joins file path
const filePath = path.join("/content", "subfolder", "test.txt");

console.log(filePath);

// method that returns the last content in the path
const base = path.basename(filePath);

console.log(base);

// method that returns the absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");

console.log(absolute);
