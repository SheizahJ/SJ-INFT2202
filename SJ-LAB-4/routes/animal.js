// We are initializing a router object from Express Router
const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animalController");

// pages
router.get("/", animalController.displayHomePage);
router.get("/animals/all-animals", animalController.displayAnimalList);
router.get("/animals/entry-form", animalController.displayEntryForm);

// Share the router with others
// CommonJS Syntax
module.exports = router;
