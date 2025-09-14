const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    username:{
   type:String,
   required:true,
  
    },
    email:{
      type: String,
      required: true,
      unique:true
    },
    password:{
type:String,
required:true
    },
      role: {
    type: String,
    enum: ["admin","user"],
    default: "user"
  }
},


{
    timestamps:true,
})
const User=mongoose.model("userModels",UserSchema);
module.exports=User;