const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const loginRoutes = require("./routes/login");
const homeRoutes = require("./routes/home");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRoutes);
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
app.use(homeRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .send("<h1>Oops! The page you have requested does not exist.</h1>");
});

app.listen(3000);
