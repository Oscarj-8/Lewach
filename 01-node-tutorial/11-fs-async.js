const { readFile, writeFile } = require("fs");
console.log("Starting");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result2) => {
    if (err) {
      console.log(err);
    }
    const second = result2;
    writeFile(
      "./content/result-async.txt",
      `This is result-async and the first and second text are ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("Starting next task");
