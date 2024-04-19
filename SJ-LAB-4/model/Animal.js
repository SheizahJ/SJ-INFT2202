// required modules
const mongoose = require("mongoose");

// animal schema to be used in the database
const animalSchema = new mongoose.Schema({
    zoo: String,
    scientificName: String,
    commonName: String,
    givenName: String,
    gender: String,
    dateOfBirth: Date,
    age: Number,
    isTransportable: Boolean,
});

// export animal schema
const Animal = mongoose.model("Animal", animalSchema);
module.exports = Animal;
