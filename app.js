const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware!");
  next();
});

app.use((req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express JS</h1>");
  // res.send({ key1: 10 });
});

app.listen(3000);
