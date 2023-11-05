const http = require("http");

const server = http.createServer((req, res) => {
  console.log("My name is Harshavardhan Macherla.");
});

server.listen(4000);
