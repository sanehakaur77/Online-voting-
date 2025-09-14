const z = require('zod');

const signUpValidation = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(2).max(10)
})

const loginValidation = z.object({
  email: z.string().email(),
  password: z.string().min(2).max(10)
})

module.exports = {
  signUpValidation,
  loginValidation
}
