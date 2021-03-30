const mongoose = require("mongoose");

const AvailableRanks = mongoose.Schema({
  names: { type: [String], required: false },
  server_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "servers",
    required: true,
  },
});

module.exports = mongoose.model("availableRanks", AvailableRanks);
