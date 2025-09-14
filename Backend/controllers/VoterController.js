
const Voter = require('../models/VoterModel');

const voterController = async (req, res) => {
    const { name, age, adhaarCard, phoneNumber } = req.body;
    try {
        const newVoter = new Voter({ name, age, adhaarCard, phoneNumber });
        await newVoter.save();
        res.status(200).json({ message: "Your Voting details are saved successfully", success: true });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', error: err, success: false });
    }
};

module.exports = voterController;
