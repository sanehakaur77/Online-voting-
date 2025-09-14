const express = require("express");
const router = express.Router();
const Party = require("../models/Party");

// Add new party
router.post("/", async (req, res) => {
  try {
    const { partyName, candidateName, logoUrl } = req.body;

    const newParty = new Party({ partyName, candidateName, logoUrl });
    await newParty.save();

    res.status(201).json({ message: "Party added successfully!" ,success:true});
  } catch (error) {
    res.status(500).json({ message: "Server Error", success:false});
  }
});


router.get("/", async (req, res) => {
  try {
    const parties = await Party.find();
    res.json(parties);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});
// party.routes.js
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Party.findByIdAndDelete(id);
    res.status(200).json({ message: "Party deleted successfully" ,success:true});
  } catch (error) {
    res.status(500).json({ message: "Error deleting party", success:false});
  }
});


module.exports = router;
