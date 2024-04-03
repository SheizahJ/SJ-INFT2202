
function showHomepage(req, res) {
    const homepage = {
        title: "Home Page",
    };

    res.render("homepage.ejs", { page: homepage });
}

module.exports = {
    showHomepage,
};