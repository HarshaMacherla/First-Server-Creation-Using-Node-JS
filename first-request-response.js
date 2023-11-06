const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<html>");
  res.write("<body>");
  if (req.url === "/home") {
    res.write("<h1>Welcome home</h1>");
  } else if (req.url === "/about") {
    res.write("<h1>Welcome to About us</h1>");
  } else if (req.url === "/node") {
    res.write("<h1>Welcome to my Node Js project</h1>");
  } else {
    res.write("<h1>Request unknown!</h1>");
  }
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(4000);
