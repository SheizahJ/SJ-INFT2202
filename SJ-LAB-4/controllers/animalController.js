function displayHomePage(req, res) {
    // Display the Home Page
    res.render("main.ejs");
}

module.exports = {
displayHomePage,
};