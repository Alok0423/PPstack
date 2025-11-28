import React, { useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EnrollModal = ({ isOpen, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 md:p-8"
        >
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          >
            <X size={20} className="text-gray-500" />
          </button>

          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <CheckCircle size={24} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Get a Call Back</h3>
            <p className="text-gray-500 text-sm mt-2">Our academic counselors will reach out to you within 24 hours.</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Request sent!"); onClose(); }}>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
              <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
              <div className="flex gap-2">
                 <span className="flex items-center justify-center px-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 text-sm">+91</span>
                 <input required type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="98765 43210" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email</label>
              <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="john@example.com" />
            </div>

            <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/30 mt-4">
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EnrollModal;