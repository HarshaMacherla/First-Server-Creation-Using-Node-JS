const express = require("express");
const router = express.Router();
const { getContact } = require("../controllers/contactus");

// Contact Us => GET
router.get("/", getContact);

// Contact Us => POST
router.post("/", (req, res, next) => {
  console.log(req.body);
  res.redirect("/success");
});

module.exports = router;
