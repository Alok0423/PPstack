import React, { useState } from 'react'; // Import useState
import { Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnrollModal from '../ui/EnrollModal'; // Import the new Modal

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  return (
    <>
      <section className="relative pt-32 pb-20 bg-black overflow-hidden min-h-[90vh] flex items-center">
        {/* ... (Keep all your existing layout code same) ... */}

              <div className="flex flex-wrap gap-4 pt-2">
                {/* UPDATE THIS BUTTON */}
                <button 
                  onClick={() => setIsModalOpen(true)} // Open modal on click
                  className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-transform hover:scale-105 shadow-xl shadow-white/10"
                >
                  Talk to an Expert
                </button>
                
                <Link to="/courses">
                  {/* ... existing button ... */}
                </Link>
              </div>

        {/* ... (Rest of layout) ... */}
      </section>

      {/* RENDER THE MODAL HERE */}
      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;