import React from 'react';
import { Link } from 'react-router-dom'; // <--- 1. Import Link

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        
        <Link to="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">P</div>
          <span className="text-xl font-bold tracking-tight text-white">PPStack</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link to="/courses" className="hover:text-white transition-colors">All Courses</Link>
          <Link to="#" className="hover:text-white transition-colors">Entrance Exam</Link>
          <Link to="#" className="hover:text-white transition-colors">Hire from us</Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2.5 text-sm font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all">
            Log in
          </button>
          <button className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;