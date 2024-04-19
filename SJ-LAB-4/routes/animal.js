// We are initializing a router object from Express Router
const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animalController");

// get routes; pages
router.get("/", animalController.displayHomePage);
router.get("/animals/all-animals", animalController.displayAnimalList);
router.get("/animals/entry-form", animalController.displayEntryForm);
router.post("/animals/edit-animal", animalController.displayEditAnimal);

// post routes; data entry
router.post("/animals/add-animal", animalController.createAnimal);
router.post("/animals/delete-animal/:animalId", animalController.deleteAnimal);
router.post("/animals/update-animal/:animalId", animalController.updateAnimal);

// Share the router with others
module.exports = router;
