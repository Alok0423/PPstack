import React, { useState } from 'react';
import { Star, CheckCircle, MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'data-science'
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-black overflow-hidden min-h-[90vh] flex items-center">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT COLUMN: Text Content */}
            <div className="text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-wider">
                <Star size={12} fill="currentColor" />
                Learn what the industry demands
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                Unlock your dream <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  tech job
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                AI-driven, industry-focused courses in software development and data science. 
                Join the community of top 1% tech talent.
              </p>

              {/* Buttons Row */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-transform hover:scale-105 shadow-xl shadow-white/10"
                >
                  Talk to an Expert
                </button>
                
                <button className="px-8 py-4 bg-transparent border border-gray-700 text-white font-bold rounded-xl hover:bg-white/5 transition-colors">
                  Explore Courses
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">15K+ Students Enrolled</p>
                  <div className="flex items-center gap-1 text-yellow-400 text-xs">
                    {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                    <span className="text-gray-500 ml-2">4.9/5 Rated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Luxury Contact Form */}
            <div className="relative">
              {/* Enhanced Multi-layer Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-indigo-500/30 blur-3xl rounded-3xl -z-10 transform rotate-2"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/20 to-blue-600/20 blur-2xl rounded-3xl -z-10 transform -rotate-1"></div>
              
              <div className="bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 p-8 md:p-10 rounded-3xl shadow-2xl border border-white/60 backdrop-blur-sm">
                
                {/* Luxury Header */}
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-200/50 mb-4">
                    <Sparkles size={16} className="text-blue-600" />
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Premium Support</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Touch</span>
                  </h3>
                  <p className="text-sm text-gray-600">Let's start your transformation journey together</p>
                </div>

                {/* Luxury Contact Cards Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <a 
                    href="https://www.linkedin.com/company/ppstack/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <p className="text-xs font-bold text-gray-900">Visit Us</p>
                    <p className="text-xs text-gray-500 mt-1">Find Location</p>
                  </a>

                  <a 
                    href="tel:+919250129025"
                    className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/30">
                      <Phone size={18} className="text-white" />
                    </div>
                    <p className="text-xs font-bold text-gray-900">Call Us</p>
                    <p className="text-xs text-gray-500 mt-1">+91 9250129025</p>
                  </a>

                  <a 
                    href="mailto:careers@ppstack.com"
                    className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30">
                      <Mail size={18} className="text-white" />
                    </div>
                    <p className="text-xs font-bold text-gray-900">Email Us</p>
                    <p className="text-xs text-gray-500 mt-1">careers@ppstack.com</p>
                  </a>

                  <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50 shadow-inner">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-3 shadow-lg shadow-cyan-500/30">
                      <Clock size={18} className="text-white" />
                    </div>
                    <p className="text-xs font-bold text-gray-900">Support</p>
                    <p className="text-xs text-gray-600 mt-1">24/7 Available</p>
                  </div>
                </div>

                {/* Premium Form Fields */}
                <div className="space-y-5">
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-2 block uppercase tracking-wide">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name" 
                      className="w-full px-5 py-4 bg-white/90 backdrop-blur-sm border border-gray-300/50 rounded-2xl text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm hover:shadow-md" 
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-2 block uppercase tracking-wide">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com" 
                      className="w-full px-5 py-4 bg-white/90 backdrop-blur-sm border border-gray-300/50 rounded-2xl text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm hover:shadow-md" 
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-2 block uppercase tracking-wide">Phone Number</label>
                    <div className="flex gap-3">
                      <div className="px-4 py-4 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300/50 rounded-2xl text-gray-800 text-sm font-bold flex items-center justify-center min-w-[75px] shadow-sm">
                        +91
                      </div>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="1234567890" 
                        className="w-full px-5 py-4 bg-white/90 backdrop-blur-sm border border-gray-300/50 rounded-2xl text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm hover:shadow-md" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-3 block uppercase tracking-wide">I'm Interested In</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        type="button" 
                        onClick={() => setFormData({...formData, interest: 'data-science'})}
                        className={`group py-4 px-4 text-sm font-bold rounded-2xl transition-all shadow-md ${
                          formData.interest === 'data-science' 
                            ? 'text-white bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 shadow-blue-600/40 scale-105' 
                            : 'text-gray-700 bg-white/90 backdrop-blur-sm border border-gray-300/50 hover:border-blue-400 hover:shadow-lg'
                        }`}
                      >
                        <span className="block text-xs mb-1 opacity-80">🤖</span>
                        Data Science / AI
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setFormData({...formData, interest: 'fullstack'})}
                        className={`group py-4 px-4 text-sm font-bold rounded-2xl transition-all shadow-md ${
                          formData.interest === 'fullstack' 
                            ? 'text-white bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 shadow-blue-600/40 scale-105' 
                            : 'text-gray-700 bg-white/90 backdrop-blur-sm border border-gray-300/50 hover:border-blue-400 hover:shadow-lg'
                        }`}
                      >
                        <span className="block text-xs mb-1 opacity-80">💻</span>
                        Full Stack Dev
                      </button>
                    </div>
                  </div>

                  <button 
                    onClick={handleSubmit}
                    className="group w-full py-5 mt-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-600/50 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                    Start My Journey
                    <CheckCircle size={18} className="group-hover:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Luxury Trust Badges */}
                <div className="mt-8 pt-6 border-t border-gray-200/50">
                  <div className="flex items-center justify-center gap-6 flex-wrap">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle size={12} className="text-green-600" />
                      </div>
                      <span className="font-semibold">Secure & Encrypted</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <CheckCircle size={12} className="text-blue-600" />
                      </div>
                      <span className="font-semibold">100% Confidential</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                        <Sparkles size={12} className="text-purple-600" />
                      </div>
                      <span className="font-semibold">Premium Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-4">Talk to an Expert</h3>
            <p className="text-gray-600 mb-6">Our team will reach out to you shortly!</p>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;