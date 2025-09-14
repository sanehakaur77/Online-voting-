const express = require("express");
const router = express.Router();
const Party = require("../models/Party");

router.post("/", async (req, res) => {
  try {
    const { partyId } = req.body;
    const party = await Party.findById(partyId);
    if (!party) return res.status(404).json({ message: "Party not found" });

    party.votes = (party.votes || 0) + 1;
    await party.save();

    res.status(200).json({ message: "Vote recorded!", votes: party.votes });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = router;

