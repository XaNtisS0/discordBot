const mongoose = require("mongoose");

const User = mongoose.Schema({
  username: { type: String, required: true },
  server_id: { type: Number, required: true },
  ranks: { type: [String], required: false },
});

module.exports = mongoose.model("users", User);
