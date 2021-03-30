const mongoose = require("mongoose");

const AvailableRanks = mongoose.Schema({
  name: { type: [String], required: true },
  server: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "servers",
    required: true,
  },
});

module.exports = mongoose.model("availableRanks", AvailableRanks);
