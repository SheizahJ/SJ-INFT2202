// We are initializing a router object from Express Router
const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animal");

// Display the Home Page (homePage.ejs)
router.get("/", animalController.displayHomePage);

// Share the router with others
// CommonJS Syntax
module.exports = router;
