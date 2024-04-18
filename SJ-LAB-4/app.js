const express = require("express");
const DBConfig = require("./config/database");

const app = express();

require("dotenv").config();
DBConfig.connectToDatabase();

app.listen(3500, () => {
    console.log("Express server listening on port 3500...");
  });