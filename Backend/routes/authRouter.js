
const express = require('express');
const router = express.Router();
const voterController = require('../controllers/VoterController.js');

// Controllers
const { signup, login } = require('../controllers/authController');

const { validateSignUp, validateLogin } = require('../middlewares/authValidate');
const { Authentication } = require('../middlewares/authentication');
const validateVoter = require('../middlewares/validateVoter');
const Products = require('../routes/ProductRoutes.js');
const checkAdmin=require('../middlewares/checkAdmin.js');
// Routes
router.post('/signup', validateSignUp, signup);
router.post('/login', validateLogin, login);
router.post('/voter', validateVoter, voterController);
router.get('/products', Authentication, Products);
router.post('/admin',checkAdmin, (req, res) => {
    res.json({ message: "Welcome Admin", success: true });
    })




module.exports = router;
