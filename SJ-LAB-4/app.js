const express = require("express");
const animalController = require("./routes/animal");
const DBConfig = require("./config/database");

const app = express();

require("dotenv").config();
DBConfig.connectToDatabase();

app.use("/", animalController);

app.listen(3500, () => {
    console.log("Express server listening on port 3500...");
  });