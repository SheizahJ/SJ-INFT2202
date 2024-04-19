// imports
const Animal = require("../model/Animal");

// GET DISPLAY FUNCTIONS
/**
 * displays the main.ejs page
 * @param {*} req 
 * @param {*} res 
 */
function displayHomePage(req, res) {
    res.render("./layouts/main.ejs");
}

/**
 * gets all animals from the database. displays the all-animals.ejs page
 * @param {*} req 
 * @param {*} res 
 */
async function displayAnimalList(req, res) {
    try {
        const collection = await Animal.find({});
        res.render("./animals/all-animals.ejs", { collection });
      } catch (err) {
        console.err("Error with getting saved collection");
        res.status(500).send("Error in getting saved collection");
      }
}

/**
 * displays the entry-form.ejs page
 * @param {*} req 
 * @param {*} res 
 */
function displayEntryForm(req, res) {
    res.render("./animals/entry-form.ejs");
}

/**
 * gets the animal data from the list. displays the data on the edit-animal.ejs page
 * for editting.
 * @param {*} req 
 * @param {*} res 
 */
function displayEditAnimal(req, res) {
    // form's data
    const formData = req.body;

    // set specific parameters
    let newDate = new Date(formData.dateOfBirth);
    let newDateOfBirth = newDate.toLocaleDateString('fr-CA');

    // deliver new collection data
    let collection = {
        zoo: formData.zoo,
        scientificName: formData.scientificName,
        commonName: formData.commonName,
        givenName: formData.givenName,
        gender: formData.gender,
        dateOfBirth: newDateOfBirth,
        age: formData.age,
        isTransportable: formData.isTransportable,

    }
    res.render("./animals/edit-animal.ejs", { collection });
}

// POST LOGIC FUNCTIONS
/**
 * Creates a new animal in the database.
 * @param {*} req 
 * @param {*} res 
 */
async function createAnimal(req, res) {
    // gets the data from the form
    const formData = req.body;

    // attempt to create a new animal
    try {
        console.log(formData);
        // validate
        let isAvailable = true;
        if (formData.isTransportable == "AVIALABLE") 
            isAvailable = true;
        else 
            isAvailable = false;

        // create animal
        await Animal.create({
            zoo: formData.zoo,
            scientificName: formData.scientificName,
            commonName: formData.commonName,
            givenName: formData.givenName,
            gender: formData.gender,
            dateOfBirth: formData.dateOfBirth,
            age: formData.age,
            isTransportable: isAvailable
        });
    
    // catches any errors
    } catch (err) {
        console.log(`Error in creating animal...`);
    }
    res.redirect("/animals/entry-form");
}

async function deleteAnimal(req, res) {
    try {
        const animalId = req.params.animalId;
        await Animal.deleteOne({ _id: animalId });
        res.redirect("/animals/all-animals");
    } catch (err) {
        console.error("Error with getting saved collection");
        res.status(500).send("Error in getting saved collection");
    }
  }

module.exports = {
    displayHomePage,
    displayAnimalList,
    displayEntryForm,
    displayEditAnimal,
    createAnimal,
    deleteAnimal
};