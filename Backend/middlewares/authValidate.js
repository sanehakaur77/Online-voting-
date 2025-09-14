const { success } = require('zod');
const { signUpValidation,loginValidation}=require('../validator/authValidation');
const validateSignUp=(req,res,next)=>{
    const result=signUpValidation.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({meassage:"Something went wrong",success:false});
    }
    next();
    req.body=result.data;
}
const validateLogin=(req,res,next)=>{
     const result=loginValidation.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({meassage:"Something went wrong",success:false});
    }
    next();
    req.body=result.data;
}
module.exports={
    validateSignUp,validateLogin
}