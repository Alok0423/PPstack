import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EnrollModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('idle'); // idle | loading | success

  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
        setStatus('idle'); // Reset on open
    } else {
        document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // SIMULATE API CALL & EMAIL SENDING
    setTimeout(() => {
        setStatus('success');
        // In a real app, here you would trigger EmailJS or Backend API
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 overflow-hidden"
        >
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition z-10">
            <X size={20} className="text-gray-500" />
          </button>

          {/* --- VIEW 1: FORM (IDLE) --- */}
          {status === 'idle' && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail size={24} className="text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Get Syllabus & Pricing</h3>
                    <p className="text-gray-500 text-sm mt-2">Enter your email to receive the detailed brochure instantly.</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                        <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
                        <input required type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="+91 98765 43210" />
                    </div>
                    <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/30 mt-2">
                        Send Me Details
                    </button>
                </form>
             </motion.div>
          )}

          {/* --- VIEW 2: LOADING --- */}
          {status === 'loading' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
                <Loader2 size={48} className="text-blue-600 animate-spin mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Sending Email...</h3>
                <p className="text-gray-500 text-sm">Please wait while we generate your brochure.</p>
            </motion.div>
          )}

          {/* --- VIEW 3: SUCCESS --- */}
          {status === 'success' && (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Check Your Inbox!</h3>
                <p className="text-gray-500 text-sm mb-6">
                    We have successfully sent the course details to your email. Our counselor will call you shortly.
                </p>
                <button onClick={onClose} className="px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition">
                    Close
                </button>
            </motion.div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EnrollModal;