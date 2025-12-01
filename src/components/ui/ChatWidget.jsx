// src/components/ui/ChatWidget.jsx
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 I'm the PPStack AI Assistant. Ask me about courses, placements, or fees!", sender: "bot" }
  ]);
  
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom logic
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Simulated AI Response Logic
  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1. Add User Message immediately
    const userMsg = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // 2. Simulate "Thinking" Delay (1.5 seconds)
    setTimeout(() => {
      let botResponse = "I can help connect you with a human counselor for that. Would you like a callback?";
      const lowerInput = userMsg.text.toLowerCase();

      // Simple Keyword Matching Logic
      if (lowerInput.includes("price") || lowerInput.includes("fee") || lowerInput.includes("cost")) {
        botResponse = "Our courses start at ₹6,167/month with EMI options. We also offer merit-based scholarships! 💰";
      } else if (lowerInput.includes("placement") || lowerInput.includes("job") || lowerInput.includes("salary")) {
        botResponse = "We have a 98% placement rate! Alumni work at Google, Microsoft, and Uber. Highest package is 1.5 Cr. 🚀";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        botResponse = "Hello! Ready to boost your career? What course are you looking for?";
      } else if (lowerInput.includes("syllabus") || lowerInput.includes("learn")) {
        botResponse = "We cover Full Stack (MERN) and Data Science (Python/AI). Which one interests you?";
      }

      setMessages((prev) => [...prev, { id: Date.now() + 1, text: botResponse, sender: "bot" }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <div className="p-1 bg-white/20 rounded-full">
                    <Bot size={20} />
                </div>
                <div>
                    <h3 className="font-bold text-sm">PPStack Assistant</h3>
                    <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-[10px] opacity-90">Online</span>
                    </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition">
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="h-[300px] overflow-y-auto p-4 bg-gray-50 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.sender === "user" 
                      ? "bg-blue-600 text-white rounded-tr-none" 
                      : "bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                   <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: "0.4s"}}></span>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..." 
                className="flex-1 bg-gray-100 border-0 rounded-full px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button type="submit" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg shadow-blue-600/30 transition-transform hover:scale-105 flex items-center gap-2"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && <span className="font-bold text-sm hidden md:block">Chat with AI</span>}
      </button>
    </div>
  );
};

export default ChatWidget;