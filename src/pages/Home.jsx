import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // <-- This was missing!
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MotionBackground from "../components/visuals/MotionBackground";
import PartnersStrip from "../components/visuals/PartnersStrip";
import Newsletter from "../components/ui/Newsletter";
import Button from "../components/ui/Button";
import CourseCard from "../components/courses/CourseCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden text-white">
        <MotionBackground />
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 border border-brand-accent/50 rounded-full text-brand-accent text-xs font-bold mb-6 tracking-wide uppercase bg-brand-accent/10">
              New: Agentic AI Course
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
              Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">Future</span> of Tech.
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-lg leading-relaxed">
              Join PPStack to learn AI, Frontend, and Backend from industry experts. 
              The world's most clean and effective learning platform.
            </p>
            <div className="flex gap-4">
              <Button>Start Learning</Button>
              <Button variant="outline" className="!text-white !border-white hover:!bg-white hover:!text-brand-dark">Explore Courses</Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.2 }}
            className="relative hidden md:block"
          >
            {/* Abstract Hero Graphic Placeholder */}
            <div className="w-full h-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 relative overflow-hidden flex items-center justify-center shadow-2xl">
               <div className="text-center">
                 <div className="w-20 h-20 bg-brand-accent rounded-full mx-auto mb-4 blur-xl opacity-50 animate-pulse"></div>
                 <h2 className="text-xl font-mono text-blue-100">Interactive Learning<br/>Environment</h2>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Strip */}
      <PartnersStrip />

      {/* Popular Courses Preview */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
            <div>
                <h2 className="text-3xl font-bold text-brand-dark mb-2">Popular Courses</h2>
                <p className="text-gray-500">Explore our highest-rated content</p>
            </div>
            {/* This Link component caused the crash because it wasn't imported */}
            <Link to="/courses" className="text-brand-blue font-bold hover:underline">View all</Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
           {[1, 2, 3].map((i) => (
             <CourseCard 
                key={i}
                title={i === 1 ? "Generative AI with Large Language Models" : i === 2 ? "React 19: The Complete Guide" : "Backend Architecture Professional Cert"}
                instructor={i === 1 ? "Andrew Ng" : "Sara Smith"}
                rating="4.9"
                image={`https://source.unsplash.com/random/800x600?tech,ai,${i}`} 
             />
           ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Home;