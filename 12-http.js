const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hey!, welcome to Oz");
  } else if (req.url === "/about") {
    res.end("This is about us page");
  } else {
    res.end(`<h1>Oops!</h1>
  <p>we can't seem to find the page you are looking for</p>
  <a href="/">Back to home</a>`);
  }
});

server.listen(5000);
