const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    // Blocking code, slows down performance and speed
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`i is ${i} and j is ${j}`);
      }
    }
    res.end("About page");
  } else {
    res.end("Oops sorry, we couldn't find the page you are looking for");
  }
});

server.listen(5000, () => {
  console.log("Server listening on port: 5000");
});
