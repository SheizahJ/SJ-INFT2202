// We want to import our Pokemon model so that we can communicate with the database
const Pokemon = require("../models/Pokemon");

function greetPokemon(req, res) {
  // Sample Data logic
  // Fetch pokemon from database
  const pokemon = {
    name: "Pikachu",
    skills: "cute cheeks",
    type: "electricity",
  };
  res.render("greetPokemon.ejs", { pokemonDetails: pokemon });
}

function displayHomePage(req, res) {
  // Display the Home Page
  res.render("homePage.ejs");
}

async function searchPokemon(req, res) {
  // We need the data from the HTML form. The data is stored inside the request body when we send a POST request
  const formData = req.body;
  // console.log("From Controller searchPokemon: Form Data:");
  // console.log(formData);
  const { pokemonName } = formData;
  // The line above is equivalent to const pokemonName = formData.pokemonName

  const pokemonAPIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
  );

  const pokemonDetails = await pokemonAPIResponse.json();
  console.log(pokemonDetails);
  res.render("displayPokemon.ejs", { pokemon: pokemonDetails });
}

async function savePokemonToCollection(req, res) {
  // Grab the form data
  const formData = req.body;

  // Create a new pokemon in our Database
  try {
    console.log(formData);

    await Pokemon.create({
      pokemonId: formData.pokemonId,
      name: formData.pokemonName,
      height: formData.pokemonHeight,
      image: formData.pokemonImage
    });
  }
  catch (err) {
    console.log(`Error while creating pokemon ${formData.pokemonName}`);
  }

  res.redirect("/"); // redirect user back to slash route upon completion
}

async function getAllPokemons(req, res) {
  // retireve collection from database
  try {
      let pokemonCollection = await Pokemon.find();

      let collectionInfo = [];

      pokemonCollection.forEach((pokemon) => {
        collectionInfo.push({
          id: pokemon.pokemonId,
          name: pokemon.name,
          height: pokemon.height,
          image: pokemon.image
        });

        console.log(pokemon.name);
      });

      res.render("displayMyCollection.ejs", { collection: collectionInfo });
    }
    catch (err) {
      console.log(`Error while retrieving pokemon collection: ${err}`);
    }
}

module.exports = {
  greetPokemon,
  displayHomePage,
  searchPokemon,
  savePokemonToCollection,
  getAllPokemons,
};
