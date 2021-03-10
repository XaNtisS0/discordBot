const mongoose = require("mongoose");

const connectionString = "mongodb://mongo:27017/bot";

mongoose.connect(connectionString, { userNewUrlParser: true }).catch((err) => {
  console.log("DB connection errror", e.message);
});

const db = mongoose.connection;

module.exports = db;
