
function greetPokemon(req, res) {
    // Sample Data Logic
    // Fetch pokemon from database
    const pokemon = {
        name: "Pikachu",
        type: "electric",
        skills: "cute cheeks",
    };

    res.render("greetPokemon.ejs", { pokemonDetails: pokemon });
}

module.exports = {
    greetPokemon,
};