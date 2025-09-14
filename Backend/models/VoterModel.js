const mongoose = require('mongoose');
const VoterSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        
        
    },
    adhaarCard: {
        type: String,
        required: true,
        unique:true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    }
})
const Voter=mongoose.model('Voters1',VoterSchema);
module.exports=Voter;