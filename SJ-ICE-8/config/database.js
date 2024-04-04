// Set up and connect to our database

const mongoose = require("mongoose");

function connectToDatabase() {
    // Cloud Database
    mongoose
        .connect("mongodb+srv://sheizahjim:passw0rd@inft2202testing.aguasii.mongodb.net/?retryWrites=true&w=majority&appName=INFT2202Testing")
        .then(() => console.log("Connected to the mongoDB database!"))
        .catch((err) => console.log(err));
}

module.exports = { connectToDatabase };

// ----------------------------------------------------------------------------
// Local Database
// mongoose.connect("mongodb://127.0.0.1:27017/pokemon")
    // .then(() => console.log("Connected to the mongoDB database!"))
    // .catch((err) => console.log(err));;

