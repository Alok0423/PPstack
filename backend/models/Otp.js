const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  phone: { 
    type: String, 
    required: true 
  },
  otp: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now, 
    expires: 300 // This document will automatically delete itself after 300 seconds (5 mins)
  }
});

module.exports = mongoose.model('Otp', otpSchema);