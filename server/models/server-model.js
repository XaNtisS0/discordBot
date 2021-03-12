const mongoose = require("mongoose");

const Server = mongoose.Schema({
  name: { type: String, required: true },
  logging: { type: Boolean, required: true, default: false },
});

module.exports = mongoose.model("servers", Server);
