const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  const content =
    fs.readFileSync(
      "/home/harshavardhan/Desktop/Node JS/First-Server-Creation-Using-Node-JS/message.txt"
    ) || "No messages found!";
  res.send(
    `<p>${content}</p><form action='/' onsubmit='document.getElementById("username").value=localStorage.getItem("username")' method='POST'><input type='text' placeholder='Enter your message' id='message' name='message'/><input id='username' name='username' type='hidden'/><button>Send</button></form>`
  );
});

router.post("/", (req, res, next) => {
  console.log(`${req.body.username}: ${req.body.message}`);
  fs.writeFileSync(
    "/home/harshavardhan/Desktop/Node JS/First-Server-Creation-Using-Node-JS/message.txt",
    `${req.body.username}: ${req.body.message}\n`,
    { flag: "a" },
    (err) => {
      if (err) {
        console.error("Error writing to file: ", err);
      } else {
        console.log("File written successfully!");
      }
    }
  );
  res.redirect("/");
});

module.exports = router;
