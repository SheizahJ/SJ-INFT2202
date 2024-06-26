// Set up and connect to our database

const mongoose = require("mongoose");

function connectToDatabase() {
  // Cloud Database
  console.log(process.env.MONGO_DB_URL);
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => console.log("Connected to mongoDB database!"))
    .catch((err) => console.log(err));
}

module.exports = { connectToDatabase };
