const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    fs.readFile("./message.txt", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      res.write("<html>");
      res.write("<head><title>Node JS File Reading</title></head>");
      res.write(
        `<body>
          <h2>${data}</h2>
          <form action='/message' method='POST'>
            <input type='text' name='message'/>
            <button type='submit'>send</button>
          </form>
        </body>`
      );
      res.write("</html>");
      return res.end();
    });
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.write(`<body>
        <h2>${message}</h2>
      </body>`);
        return res.end();
      });
    });
  }
};

exports.handler = requestHandler;
exports.someText = "Some hard coded text";
