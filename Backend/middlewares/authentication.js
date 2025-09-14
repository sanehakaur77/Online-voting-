// const jwt=require('jsonwebtoken');

// const Authentication=(req,res,next)=>{
// const token=req.headers.authorization;
// if(!token){
//     return res.status(400).json({message:"Invalid User",success:false});

// }
// const decoded=jwt.verify(token,process.env.Secret_Key);

// req.user=decoded;
// next();

// }
// module.exports={
//    Authentication
// }



const jwt = require("jsonwebtoken");

const Authentication = (req, res, next) => {
  const token = req.headers.authorization // Bearer token

  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.Secret_Key);

    // अब decoded = { id, role, iat, exp }
    req.user = decoded;  // 👈 यहाँ role available होगा
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = { Authentication };

