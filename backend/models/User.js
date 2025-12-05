const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Please add a name'] 
  },
  email: { 
    type: String, 
    required: [true, 'Please add an email'], 
    unique: true 
  },
  password: { 
    type: String, 
    required: [true, 'Please add a password'] 
  },
  phone: { 
    type: String, 
    unique: true, 
    sparse: true // Allows multiple users to have 'null' phone if they don't use it
  },
  isAdmin: { 
    type: Boolean, 
    default: false 
  },
}, { 
  timestamps: true 
});

// Middleware: Encrypt password before saving to DB
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Helper: Check if entered password matches hashed password
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);