// We are initializing a router object from Express Router
const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animalController");

// get routes; pages
router.get("/", animalController.displayHomePage);
router.get("/animals/all-animals", animalController.displayAnimalList);
router.get("/animals/entry-form", animalController.displayEntryForm);
router.get("/animals/edit-animal", animalController.displayEditAnimal);

// post routes; data entry

// Share the router with others
module.exports = router;
