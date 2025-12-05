const { getBotResponse } = require('../utils/botLogic');

// @desc    Process a chat message
// @route   POST /api/chat/message
const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: 'Message is required' });
    }

    // Get response from our modular bot logic
    const botReply = getBotResponse(message);

    // Simulate a slight delay to feel like a "real" typing user
    setTimeout(() => {
      res.json({ 
        reply: botReply,
        timestamp: new Date()
      });
    }, 500);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get WhatsApp Support Number
// @route   GET /api/chat/whatsapp
const getWhatsAppConfig = async (req, res) => {
  // We read this from the .env file so you can change it easily
  const number = process.env.WHATSAPP_NUMBER || '1234567890';
  
  res.json({
    number: number,
    link: `https://wa.me/${number}?text=Hi%20PPStack,%20I%20need%20help!`
  });
};

module.exports = { sendMessage, getWhatsAppConfig };