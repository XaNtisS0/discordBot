const mongoose = require("mongoose");

const connectionString = "mongodb://mongo:27017/bot";

mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log("DB connection errror", err.message);
  });

const db = mongoose.connection;

module.exports = db;
