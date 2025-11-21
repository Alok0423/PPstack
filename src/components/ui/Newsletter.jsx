import { motion } from 'framer-motion';
import Button from './Button';

const Newsletter = () => {
  return (
    <section className="relative bg-[#0056D2] py-20 overflow-hidden">
      {/* Abstract Geometric Background (The Cubes) */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Left Cube */}
         <motion.svg 
           animate={{ rotate: 360 }}
           transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
           className="absolute -left-20 top-10 w-96 h-96 opacity-30 text-brand-accent" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
            <path d="M50 15 L85 35 L85 75 L50 95 L15 75 L15 35 Z" />
            <path d="M50 15 L50 55 M85 35 L50 55 M15 35 L50 55" />
            <path d="M50 55 L50 95" />
         </motion.svg>
         
         {/* Right Cube */}
         <motion.svg 
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 bottom-0 w-80 h-80 opacity-30 text-pink-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
            <path d="M20 20 H80 V80 H20 Z" />
            <path d="M20 20 L40 40" />
         </motion.svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay ahead of the curve</h2>
        <p className="text-blue-100 mb-8 text-lg">Get the latest AI updates, course launches, and expert interviews directly in your inbox.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="name@email.com" 
            className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent"
          />
          <Button className="bg-pink-gradient !text-white whitespace-nowrap">
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;