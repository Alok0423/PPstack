const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { OAuth2Client } = require('google-auth-library');
const nodemailer = require('nodemailer');

// Initialize Google Client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// --- HELPERS ---
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

const sendWelcomeEmail = async (email, name) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return;
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Welcome to PPStack! 🚀',
      html: `<h1>Welcome, ${name}!</h1><p>We are thrilled to have you.</p>`
    });
    console.log(`📧 Welcome email sent to ${email}`);
  } catch (error) {
    console.error('❌ Email failed:', error.message);
  }
};

// --- CONTROLLERS ---

// 1. Google Login
const googleLogin = async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { name, email, picture } = ticket.getPayload();

    let user = await User.findOne({ email });

    if (!user) {
      const randomPassword = Math.random().toString(36).slice(-8);
      user = await User.create({ name, email, password: randomPassword });
      await sendWelcomeEmail(email, name);
    }

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      picture: picture,
      token: generateToken(user._id)
    });
  } catch (error) {
    res.status(400).json({ message: 'Google Login Failed' });
  }
};

// 2. Register User (Email/Pass)
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: 'Please add all fields' });

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, password });
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 3. Login User (Email/Pass)
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 4. Get Current User
const getMe = async (req, res) => {
  res.status(200).json(req.user);
};

// --- EXPORT EVERYTHING ---
module.exports = {
  googleLogin,
  registerUser,
  loginUser,
  getMe,
};