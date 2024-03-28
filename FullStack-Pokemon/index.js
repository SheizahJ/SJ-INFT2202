const express = require("express");
const pokemonRouter = require("./routes/pokemon");

const app = express();

app.set("views", "./views"); // Create the views folder

app.set("view engine", "ejs");

app.get("/hello", (req, res) => res.send("hello there"));

// We are instructing our application to look into the routes folder and into the
// pokemon.js file inside that folder to manage any routes that begin with the path "/"
app.use("/", pokemonRouter);

app.listen(3500, () => {
    console.log("Express server listening on port 3500...");
});