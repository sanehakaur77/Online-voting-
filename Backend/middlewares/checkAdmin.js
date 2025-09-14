const checkAdmin=(req,res,next)=>{
    const {admin_email,admin_password} = req.body;
     if (admin_email !== process.env.admin_email || admin_password !== process.env.admin_password  || admin_password!==process.env.admin_password) {
    return res.status(403).json({ message: "Unauthorized: Invalid email or password", success: false });
  }
    next();
}

module.exports= checkAdmin;

