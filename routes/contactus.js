const express = require("express");
const router = express.Router();

const contactUsController = require("../controllers/form");

router.get("/contactus", contactUsController.getContactUs);

router.post("/contactus", contactUsController.postContactUs);

module.exports = router;
