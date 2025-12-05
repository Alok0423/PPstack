const express = require('express');
const router = express.Router();
// Import ALL functions
const { googleLogin, registerUser, loginUser, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Define Routes
router.post('/google', googleLogin);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router;