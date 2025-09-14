
const User = require('../models/UserModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const { username, email, password, role } = req.body; 
    try {
        const isFind = await User.findOne({ email });
        if (isFind) {
            return res.status(400).json({ message: "User already exists, please login", success: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role: role
        });

        await newUser.save();
        res.status(200).json({ message: "User created successfully", success: true });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', error: err, success: false });
    }
};


const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: "User not found, please sign up", success: false });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials", success: false });

        const token = jwt.sign({ id: user._id }, process.env.Secret_Key, { expiresIn: '2h' });

        res.status(200).json({
            message: "Login successful",
            success: true,
            user: { id: user._id, email: user.email, username: user.username },
            token: token
        });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", success: false, error: err.message });
    }
};

module.exports = { signup, login };
