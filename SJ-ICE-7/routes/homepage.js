
const express = require("express");
const router = express.Router();
const homepageController = require("../controllers/homepage");

router.get("/home", homepageController.showHomepage);

module.exports = router;
