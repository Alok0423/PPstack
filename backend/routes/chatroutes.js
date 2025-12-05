const express = require('express');
const router = express.Router();
const { sendMessage, getWhatsAppConfig } = require('../controllers/chatController');

// Chatbot Endpoint
router.post('/message', sendMessage);

// WhatsApp Config Endpoint
router.get('/whatsapp', getWhatsAppConfig);

module.exports = router;