const express = require("express");
const pokemonRouter = require("./routes/pokemon");
const bodyParser = require("body-parser");
const DBConfig = require("./config/database");

const app = express();

// Connect to the Databse
DBConfig.connectToDatabase();

app.set("views", "./views"); // Create the views folder

app.set("view engine", "ejs");

// Middleware is similar to executing functions while the HTTP request is travelling to its final destination
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// We are instructing our application to look into the routes folder and into the pokemon.js file inside that folder to manage any routes that begin with the path "/"
app.use("/", pokemonRouter);

app.listen(3500, () => {
  console.log("Express server listening on port 3500...");
});

// ICE 8: Implement the Read all pokemons from saved collection story:
/*
  1. Router - Get /pokemonList
  2. Controller - getAllPokemons(req, res)
  3. EJS - displayMyCollection.ejs
  
  As for the button to view your collection, you can add it in the homePage.ejs 
  (for extra points put it in a navbar using EJS partials)
*/
