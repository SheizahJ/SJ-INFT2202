console.log("Script is running!");


// document.getElementById("loadPokemon").addEventListener("click", function (event) {
//     // Create new XMLHTTPRequest Object to grab the Pokemon API data

//     var xhr = new XMLHttpRequest();

//     // Below will create a GET HTTP Request to the pokemon API via the URL
//     // Call below is ASYNCHRONOUS
//     xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");

//     xhr.onload = function () {
//         console.log("API has responded!");
//         // console.log(this);

//         var response = JSON.parse(this.responseText);
//         console.log(response);

//         var pokemonString = "";
//         response.results.forEach(pokemon => {
//             pokemonString += `<li><a href=${pokemon.url}>${pokemon.name}</a></li>`;
//         });
//         document.getElementById("pokemonList").innerHTML = pokemonString;
//     };

//     // Send the request
//     xhr.send();
// });


// ------------------------- Asynchronous API Call using fetch ---------------------------------

// Promises
// var userData = await postgresDatabase.GetUserData(); // takes 5 seconds


// using Async/Await to handle promise
// function fetchUserData(userData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve({ username: "user", password: 123});
//             reject({ status: 400, error: "could not find user" });
//         }, 5000);
//     });

// }

// async function handlePromise() {
//     console.log("Initiating call to database...");
//     let promiseResult = await fetchUserData();
//     console.log(promiseResult);
// }

// handlePromise();

// The reason we are defining a promise in the format below is to simulate an API/Database call
// const DBGetUserData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve({ username: "user", password: 123});
//         reject({ status: 400, error: "could not find user" });
//     }, 5000);
// });

// console.log(DBGetUserData);

// The code below will WAIT until the promise resolves (either fulfilled or rejected and THEN 
// it will executre the callback function and pass the promise response as an argument to it)
// DBGetUserData.then((response) => {
//     console.log(response)
// })
//     .catch(error => console.log(error)); // catches exception

// console.log("I am line 74 and I ran.");


// document.getElementById("loadPokemon").addEventListener("click", function () {
//     // fetch list of pokemons
//     // REFERENCE: xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
    
//     // using FETCH and .THEN
//     let pokemonList = fetch(
//         "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0", 
//         {
//         method: "GET"
//         }
//     )
//     .then(response => {
//         return response.json();
//     })
//     .then(jsonResult => {
//         // the scope of the jsonResult variable is limited to only this .then callback function
//         console.log(jsonResult);
        
//         // display list of pokemons in HTML
//         var pokemonString = "";
//         jsonResult.results.forEach(pokemon => {
//             pokemonString += `<li><a href=${pokemon.url}>${pokemon.name}</a></li>`;
//         });
//         document.getElementById("pokemonList").innerHTML = pokemonString; 

//         return jsonResult;
//     })
//     .catch(error => console.log("We have encountered an error: " + error))
//     .finally(() => {
//         console.log("API Call complete.");
//     });
// });


// USING FETCH AND ASYNC AWAIT
document.getElementById("loadPokemon").addEventListener("click", async function (event) {
    event.preventDefault();
    // fetch list of pokemons
    // REFERENCE: xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
    
    // get input value
    var pokemonName = document.getElementById("pokemonName").value.trim().toLowerCase();

    if (pokemonName == "") {
        document.getElementById("error").innerHTML = `Please provide the name of a Pokemon in the search box.`; 
        return;
    }

    // using FETCH and .THEN
    try {
        let pokemonList = await fetch(
            // URL: for ICE -> Store user input in variable called pokemonName
            // `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
            
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        ); // By default, it sends a GET HTTP Request
        

        // display list of pokemons in HTML
        var jsonResults = await pokemonList.json();
        console.log(jsonResults); // display pokemon details

        // Pokemon Title
        document.getElementById("pokemonTitle").innerHTML = `${pokemonName.toUpperCase()} DETAILS`; 
        
        // Pokemon Basic Info
        // get info
        var pokemonInfo = "";
        pokemonInfo += `<li>BASE EXPERIENCE: ${jsonResults.base_experience}</li>`;
        pokemonInfo += `<li>HEIGHT: ${jsonResults.height}</li>`;
        pokemonInfo += `<li>WEIGHT: ${jsonResults.weight}</li>`;

        // show info
        document.getElementById("infoHeader").innerHTML = `${pokemonName.toUpperCase()} INFO`; 
        document.getElementById("basicInfo").innerHTML = pokemonInfo;

        // Pokemon Stats
        // get info
        var formDetails = "";
        jsonResults.stats.forEach(pokemonStat => {
            formDetails += `<li>${pokemonStat.stat.name.toUpperCase()}: ${pokemonStat.base_stat}</li>`;
        });

        // show info
        document.getElementById("statsHeader").innerHTML = `${pokemonName.toUpperCase()} STATS`;
        document.getElementById("statsList").innerHTML = formDetails;

        // Pokemon Abilities
        // get info
        var abilityDetails = "";
        jsonResults.abilities.forEach(pokemonAbility => {
            abilityDetails += `<li>${pokemonAbility.ability.name}</li>`;
        });

        // show info
        document.getElementById("abilityHeader").innerHTML = `${pokemonName.toUpperCase()} ABILITIES`; 
        document.getElementById("abilityList").innerHTML = abilityDetails;
    } catch (error) {
        document.getElementById("error").innerHTML = `Unable to find given Pokemon. Please try again...`; 
        console.log("We have encountered an error: " + error);
    }
    
});


/* ------ ICE 6 Details -------
    1. [V] Create a form where the user will be able to type in the name of a pokemon.

    2. [V] After the user submits the form, send an API GET Request to the pokeapi searching 
       for the details of the pokemon name the user submitted from the form.
    
    3. [V] If the api returns the pokemon details successfully, then display the details of 
       the pokemon in the HTML (i.e. update the body of the HTML to have the pokemon).

    4. [V] If the api returns an error that it can't find the pokemon, display the error to
       the user and ask them to type a different pokemon name.
*/