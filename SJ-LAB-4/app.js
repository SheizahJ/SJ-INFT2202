/**
 * Name: Sheizah Jimenez
 * ID: 100892505
 * Date: 4/18/2024
 */

// required modules for the program
const express = require("express");
const animalRouter = require("./routes/animal");
const bodyParser = require("body-parser");
const DBConfig = require("./config/database");
const app = express();

// database connection to send and gather animal data
require("dotenv").config();
DBConfig.connectToDatabase();

// the ejs webpage system
app.set("views", "./views");
app.set("view engine", "ejs");

// uses for the application to function properly
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", animalRouter);

// the localhost port listener
app.listen(3500, () => {
    console.log("Express server listening on port 3500...");
  });