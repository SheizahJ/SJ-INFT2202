/**
 * Name: Sheizah Jimenez
 * ID: 100892505
 * Date: 4/18/2024
 */

// constants
const express = require("express");
const animalRouter = require("./routes/animal");
const bodyParser = require("body-parser");
const DBConfig = require("./config/database");
const app = express();

// requirements
require("dotenv").config();
DBConfig.connectToDatabase();

app.set("views", "./views");
app.set("view engine", "ejs");

// use
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", animalRouter);

// listener
app.listen(3500, () => {
    console.log("Express server listening on port 3500...");
  });