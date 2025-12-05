import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import Auth

const Navbar = () => {
  const { user, signout } = useAuth(); // Get user status

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
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

        {/* Auth Buttons - Logic to show User Profile if logged in */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
               <span className="text-white text-sm font-bold">Hi, {user.name}</span>
               <button 
                 onClick={signout} 
                 className="px-4 py-2 text-sm font-semibold text-gray-300 border border-white/20 rounded-lg hover:bg-white/10"
               >
                 Logout
               </button>
            </div>
          ) : (
            <>
              {/* FIXED: Added Link wrappers */}
              <Link to="/login">
                <button className="px-5 py-2.5 text-sm font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5">
                  Sign up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;