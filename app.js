// CommonJS, every files is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require("./4-names");
// const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");

const data = require("./6-alternative-flavor");

console.log(data);
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
