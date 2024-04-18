
// DISPLAY FUNCTIONS
function displayHomePage(req, res) {
    res.render("./layouts/main.ejs");
}

function displayAnimalList(req, res) {
    res.render("./animals/all-animals.ejs");
}

function displayEntryForm(req, res) {
    res.render("./animals/entry-form.ejs");
}


// MAIN LOGIC FUNCTIONS

module.exports = {
    displayHomePage,
    displayAnimalList,
    displayEntryForm
};