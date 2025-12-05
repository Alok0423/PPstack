// This file handles the "Brain" of your chatbot.
// You can expand this with AI (OpenAI) later easily.

const getBotResponse = (message) => {
  const msg = message.toLowerCase();

  // 1. Greetings
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
    return "Hello! 👋 Welcome to PPStack. How can I help you today?";
  }

  // 2. Project specific queries
  if (msg.includes('price') || msg.includes('cost')) {
    return "Our basic plan starts at $0. We also have Pro plans for scaling teams.";
  }

  if (msg.includes('contact') || msg.includes('support')) {
    return "You can reach our support team at support@ppstack.com or use the WhatsApp button!";
  }

  if (msg.includes('signup') || msg.includes('register')) {
    return "You can sign up by clicking the 'Get Started' button on the top right.";
  }

  // 3. Fallback
  return "I'm not sure I understand. Try asking about 'price', 'signup', or 'contact'.";
};

module.exports = { getBotResponse };