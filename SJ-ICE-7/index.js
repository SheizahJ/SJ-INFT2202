
/*  In Class Exercise #7 (DUE: April 2nd)

    As a User, I want to visit localhost:3500/home and see a blank
    page with the text "Home Page"
*/

const express = require("express");
const homepageRouter = require("./routes/homepage");

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", homepageRouter);

app.listen(3500, () => {
    console.log("Express server listening on port 3500...");
});