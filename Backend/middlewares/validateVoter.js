const voterValidation = require('../validator/VoterauthValidation');

const validateVoter = (req, res, next) => {
  const result = voterValidation.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Something went wrong",
      success: false,
      errors: result.error, // optional: send detailed Zod errors
    });
  }

  req.body = result.data; 
  next(); 
  
};

module.exports = validateVoter;
