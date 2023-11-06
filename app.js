const http = require("http");
const routes = require("./routes");

const server = http.createServer((req, res) => {
  console.log(routes.someText);
  routes.handler(req, res);
});

server.listen(4000);
