const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", require("./routes/admin"));
app.use(require("./routes/shop"));
app.use("/contactus", require("./routes/contactus"));
app.use("/success", require("./routes/success"));
app.use("/", require("./routes/404"));

app.listen(3000);
