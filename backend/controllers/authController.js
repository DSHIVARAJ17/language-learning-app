const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Signup Controller
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({
      message: 'Signup successful',
      user: { name: newUser.name, email: newUser.email },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error signing up' });
  }
};

// Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Login successful',
      user: { name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
  }
};

module.exports = { signup, login };
