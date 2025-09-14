const mongoose = require("mongoose");

const PartySchema = new mongoose.Schema({
  partyName: { type: String, required: true },
  candidateName: { type: String, required: true },
  logoUrl: { type: String, required: true },
  votes: { type: Number, default: 0 }, // New field for vote count
});

module.exports = mongoose.model("Party", PartySchema);
