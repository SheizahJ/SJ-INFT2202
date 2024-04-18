// imports
const Animal = require("../model/Animal");

// DISPLAY FUNCTIONS
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
        const myCollection = await Animal.find({});
        res.render("./animals/all-animals.ejs", { myCollection });
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
 * displays the edit-animal.ejs page
 * @param {*} req 
 * @param {*} res 
 */
function displayEditAnimal(req, res) {
    res.render("./animals/edit-animal.ejs");
}


// MAIN LOGIC FUNCTIONS

module.exports = {
    displayHomePage,
    displayAnimalList,
    displayEntryForm,
    displayEditAnimal
};