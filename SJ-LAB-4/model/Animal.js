const mongoose = require("mongoose");

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

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
