const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();

// Route for Signup
router.post('/signup', signup);

// Route for Login
router.post('/login', login);

module.exports = router;
