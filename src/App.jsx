import React from 'react';
import { MessageCircle } from 'lucide-react';

// --- IMPORTS ---
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Stats from './components/home/Stats';
import CompanyMarquee from './components/home/CompanyMarquee';
import IndustryLearning from './components/home/IndustryLearning';
import CareerRoadmap from './components/home/CareerRoadmap';
import Faculty from './components/home/Faculty';
import Offerings from './components/courses/Offerings';

function App() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <Navbar />
      
      <main>
        {/* Dark Mode Hero Area */}
        <Hero />
        
        {/* Transition to Light Mode Content */}
        <div className="bg-white rounded-t-[40px] relative z-20 mt-[-40px] pt-10 overflow-hidden">
            <Stats />
            <CompanyMarquee />
            <IndustryLearning />
            <CareerRoadmap />
            <Faculty />
            <Offerings />
            
            {/* Alumni Section */}
            <section className="py-20 bg-purple-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">PPStack Alumni Network</h2>
                    <div className="h-64 bg-white rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400">
                        Alumni Success Stories Carousel Component
                    </div>
                </div>
            </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Blue Bottom Bar */}
      <div className="bg-blue-600 py-4 border-t border-blue-500">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white">
              <div className="flex gap-4 mb-2 md:mb-0">
                  <span className="font-bold text-sm">Need Help?</span>
                  <button className="bg-white text-blue-600 px-3 py-0.5 rounded font-bold text-xs uppercase">Request Callback</button>
              </div>
              <p className="text-xs opacity-80">&copy; 2025 PPStack. All rights reserved.</p>
          </div>
      </div>

      {/* Floating Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg shadow-lg flex items-center gap-2 font-bold text-sm transition-transform hover:scale-105">
           <MessageCircle size={20} />
           <span>Questions?</span>
        </button>
      </div>
    </div>
  );
}

export default App;