import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, Search, Bell, TrendingUp, Clock, Star, Users, Play, MessageSquare, Sun, Moon, ChevronDown, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// --- Animation Settings ---
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// --- Explore Dropdown Data ---
const exploreData = {
  roles: [
    'Data Analyst', 'Project Manager', 'Cyber Security Analyst', 
    'Data Scientist', 'Business Intelligence Analyst', 'Digital Marketing Specialist',
    'UI / UX Designer', 'Machine Learning Engineer', 'Social Media Specialist',
    'Computer Support Specialist'
  ],
  categories: [
    'Artificial Intelligence', 'Business', 'Data Science', 
    'Information Technology', 'Computer Science', 'Healthcare',
    'Physical Science and Engineering', 'Personal Development', 
    'Social Sciences', 'Language Learning', 'Arts and Humanities'
  ],
  certificates: ['Business', 'Computer Science', 'Data Science', 'Information Technology'],
  degrees: ['Bachelor\'s Degrees', 'Master\'s Degrees', 'Postgraduate Programs'],
  skills: ['Python', 'Artificial Intelligence', 'Excel', 'Machine Learning', 'SQL', 'Project Management', 'Power BI', 'Marketing']
};

// --- Helper Components ---
const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative group h-full flex items-center">
      <motion.p
        transition={{ duration: 0.3 }}
        className={`cursor-pointer text-sm font-medium hover:text-indigo-600 transition-colors ${
          active === item ? "text-indigo-600" : "text-gray-600"
        }`}
      >
        {item === 'Community' ? (
          <Link to="/community" className="inline-block">{item}</Link>
        ) : (
          item
        )}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute left-1/2 transform -translate-x-1/2 top-full pt-4"
        >
          {active === item && (
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-100 shadow-xl p-4 w-max">
              <motion.div layout className="w-max h-full p-2">
                {children}
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

const HoveredLink = ({ children, href, icon: Icon }) => {
  return (
    <a 
      href={href} 
      className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 transition-all group"
    >
      {Icon && <Icon size={18} className="text-indigo-400 group-hover:text-indigo-600" />}
      <span className="text-sm font-medium">{children}</span>
    </a>
  );
};

const NotificationDropdown = () => (
  <div className="w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
    <div className="p-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
      <h3 className="font-semibold text-gray-900">Notifications</h3>
      <span className="text-xs font-medium text-indigo-600 cursor-pointer hover:text-indigo-800">
        Mark all read
      </span>
    </div>
    <div className="max-h-[320px] overflow-y-auto custom-scrollbar">
       {[
         { icon: Users, color: "bg-blue-100 text-blue-600", text: "New student enrolled in React Mastery", time: "2 min ago", unread: true },
         { icon: Star, color: "bg-yellow-100 text-yellow-600", text: "You earned a 'Top Instructor' badge!", time: "1 hour ago", unread: true },
         { icon: Play, color: "bg-purple-100 text-purple-600", text: "Your course 'Advanced Node' is now live", time: "2 hours ago", unread: false },
         { icon: MessageSquare, color: "bg-green-100 text-green-600", text: "Alex commented on your lecture", time: "5 hours ago", unread: false }
       ].map((notif, i) => (
         <div key={i} className={`flex gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-50 last:border-0 ${notif.unread ? 'bg-indigo-50/30' : ''}`}>
           <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${notif.color}`}>
             <notif.icon size={14} />
           </div>
           <div>
             <p className="text-sm text-gray-700 leading-snug font-medium">{notif.text}</p>
             <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
           </div>
           {notif.unread && <div className="h-2 w-2 rounded-full bg-indigo-500 mt-1.5 shrink-0" />}
         </div>
       ))}
    </div>
    <div className="p-3 bg-gray-50 text-center border-t border-gray-100">
      <a href="/notifications" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 block w-full">
        View All Notifications
      </a>
    </div>
  </div>
);

// --- Explore Dropdown Component ---
const ExploreDropdown = () => (
  <div className="w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
    <div className="grid grid-cols-4 gap-6 p-8">
      {/* Explore roles */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Explore roles</h3>
        <ul className="space-y-2">
          {exploreData.roles.map((role, i) => (
            <motion.li
              key={i}
              whileHover={{ x: 4, color: '#4f46e5' }}
              className="text-sm text-gray-700 cursor-pointer transition-colors"
            >
              {role}
            </motion.li>
          ))}
          <motion.li
            whileHover={{ x: 4 }}
            className="text-sm text-indigo-600 font-semibold cursor-pointer pt-2"
          >
            View all
          </motion.li>
        </ul>
      </div>

      {/* Explore categories */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Explore categories</h3>
        <ul className="space-y-2">
          {exploreData.categories.map((cat, i) => (
            <motion.li
              key={i}
              whileHover={{ x: 4, color: '#4f46e5' }}
              className="text-sm text-gray-700 cursor-pointer transition-colors"
            >
              {cat}
            </motion.li>
          ))}
          <motion.li
            whileHover={{ x: 4 }}
            className="text-sm text-indigo-600 font-semibold cursor-pointer pt-2"
          >
            View all
          </motion.li>
        </ul>
      </div>

      {/* Certificates & Degrees */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Earn a Professional Certificate</h3>
        <ul className="space-y-2 mb-6">
          {exploreData.certificates.map((cert, i) => (
            <motion.li
              key={i}
              whileHover={{ x: 4, color: '#4f46e5' }}
              className="text-sm text-gray-700 cursor-pointer transition-colors"
            >
              {cert}
            </motion.li>
          ))}
          <motion.li
            whileHover={{ x: 4 }}
            className="text-sm text-indigo-600 font-semibold cursor-pointer pt-2"
          >
            View all
          </motion.li>
        </ul>

        <h3 className="font-bold text-gray-900 mb-3 text-sm">Earn an online degree</h3>
        <ul className="space-y-2">
          {exploreData.degrees.map((deg, i) => (
            <motion.li
              key={i}
              whileHover={{ x: 4, color: '#4f46e5' }}
              className="text-sm text-gray-700 cursor-pointer transition-colors"
            >
              {deg}
            </motion.li>
          ))}
          <motion.li
            whileHover={{ x: 4 }}
            className="text-sm text-indigo-600 font-semibold cursor-pointer pt-2"
          >
            View all
          </motion.li>
        </ul>
      </div>

      {/* Trending Skills */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Explore trending skills</h3>
        <ul className="space-y-2 mb-6">
          {exploreData.skills.map((skill, i) => (
            <motion.li
              key={i}
              whileHover={{ x: 4, color: '#4f46e5' }}
              className="text-sm text-gray-700 cursor-pointer transition-colors"
            >
              {skill}
            </motion.li>
          ))}
        </ul>

        <h3 className="font-bold text-gray-900 mb-3 text-sm">Prepare for a certification exam</h3>
        <motion.div
          whileHover={{ x: 4 }}
          className="text-sm text-indigo-600 font-semibold cursor-pointer"
        >
          View all
        </motion.div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 px-8 py-4 border-t border-gray-100">
      <p className="text-sm text-gray-700">
        Not sure where to begin?{' '}
        <motion.a
          href="#"
          className="text-indigo-600 font-semibold underline"
          whileHover={{ x: 2 }}
        >
          Browse free courses
        </motion.a>
        {' '}or{' '}
        <motion.a
          href="#"
          className="text-indigo-600 font-semibold"
          whileHover={{ x: 2 }}
        >
          Learn more about <span className="bg-indigo-600 text-white px-2 py-0.5 rounded text-xs ml-1">PPstack PLUS</span>
        </motion.a>
      </p>
    </div>
  </div>
);

// --- Main Navbar Component ---
export default function Navbar() {
  const [active, setActive] = useState(null);
  const [showExplore, setShowExplore] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } catch (e) { return 'light'; }
  });

  React.useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="fixed top-6 inset-x-0 max-w-6xl mx-auto z-50 px-4">
      <motion.div 
        className="relative rounded-full border border-white/20 bg-white/90 backdrop-blur-xl shadow-xl shadow-indigo-200/30 flex items-center justify-between px-6 py-3"
        onMouseLeave={() => {
          setActive(null);
          setShowExplore(false);
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Animated gradient border effect */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(90deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.2) 100%)',
            filter: 'blur(8px)',
            zIndex: -1
          }}
        />

        {/* Logo / Home Button */}
        <Link to="/" className="flex items-center gap-2 group" aria-label="Go to home">
          <motion.div 
            className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-1.5 rounded-lg shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
             <Home className="text-white w-4 h-4" />
          </motion.div>
          <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight hidden sm:block">
            PPStack
          </span>
        </Link>

        {/* Center Menu (Desktop) */}
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          {/* Explore Mega Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setShowExplore(true)}
            onMouseLeave={() => setShowExplore(false)}
          >
            <motion.button
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
              whileHover={{ y: -2 }}
            >
              Explore
              <motion.div
                animate={{ rotate: showExplore ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {showExplore && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={transition}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50"
                >
                  <ExploreDropdown />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <MenuItem setActive={setActive} active={active} item="Dashboard">
             <div className="flex flex-col gap-2 w-48">
               <HoveredLink href="/dashboard" icon={TrendingUp}>Overview</HoveredLink>
               <HoveredLink href="/my-learning" icon={Clock}>My Learning</HoveredLink>
               <HoveredLink href="/achievements" icon={Star}>Achievements</HoveredLink>
             </div>
          </MenuItem>
          
          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="grid grid-cols-2 gap-4 w-80">
               <div className="space-y-2">
                 <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Categories</h4>
                 <HoveredLink href="/courses/web">Web Development</HoveredLink>
                 <HoveredLink href="/courses/data">Data Science</HoveredLink>
                 <HoveredLink href="/courses/mobile">Mobile Apps</HoveredLink>
               </div>
               <div className="space-y-2">
                 <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Featured</h4>
                 <motion.div 
                   className="bg-gradient-to-br from-indigo-50 to-purple-50 p-3 rounded-lg cursor-pointer border border-indigo-100"
                   whileHover={{ scale: 1.05, y: -2 }}
                 >
                    <p className="text-xs font-bold text-indigo-700 mb-1">New: React 19</p>
                    <p className="text-[10px] text-indigo-500 leading-tight">Master the latest hooks and compiler features.</p>
                 </motion.div>
               </div>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Community">
            <div className="flex flex-col gap-2 w-48">
               <HoveredLink href="/forums" icon={Users}>Discussion Forums</HoveredLink>
               <HoveredLink href="/events" icon={Play}>Live Events</HoveredLink>
            </div>
          </MenuItem>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Enhanced Search Bar */}
          <motion.div 
            className="relative hidden sm:block group"
            whileHover={{ scale: 1.02 }}
          >
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-indigo-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-gradient-to-r from-gray-100/50 to-indigo-50/30 border-0 rounded-full pl-9 pr-4 py-2 text-sm focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all w-32 focus:w-52 placeholder-gray-400 text-gray-700 shadow-inner"
            />
          </motion.div>
          
          {/* Globe Icon with Pulse */}
          <motion.button
            className="relative p-2 text-gray-500 hover:text-indigo-600 transition-colors"
            whileHover={{ scale: 1.15, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <Globe className="h-5 w-5" />
            <motion.span
              className="absolute inset-0 rounded-full bg-indigo-400/20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
          
          {/* Notification Bell */}
          <div 
            className="relative" 
            onMouseEnter={() => setActive('notifications')}
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/notifications" className="p-2 text-gray-500 hover:text-indigo-600 relative transition-colors inline-flex items-center">
                <Bell className="h-5 w-5" />
                <motion.span 
                  className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </Link>
            </motion.div>
            
            <AnimatePresence>
              {active === 'notifications' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 10, x: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={transition}
                  className="absolute right-0 top-full pt-4 z-50"
                  style={{ minWidth: '320px' }}
                >
                   <NotificationDropdown />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Theme Toggle with Animation */}
          <motion.button 
            onClick={toggleTheme} 
            title="Toggle theme" 
            className="p-2 rounded-full bg-gradient-to-br from-white/80 to-gray-100/80 border border-gray-200 shadow-sm"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </motion.button>
          
          <AuthControls />
        </div>
      </motion.div>
    </div>
  );
}

function AuthControls() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="flex items-center gap-3">
        <Link to="/login" className="text-sm text-gray-700 hover:text-indigo-600 font-medium transition-colors">Log in</Link>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/signup" className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all">
            Sign up
          </Link>
        </motion.div>
      </div>
    );
  }

  const initials = user.name ? user.name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase() : (user.email ? user.email[0].toUpperCase() : 'U');

  return (
    <div className="flex items-center gap-3">
      <motion.div 
        className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center font-semibold shadow-lg cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        {initials}
      </motion.div>
      <motion.button 
        onClick={logout} 
        className="text-sm text-gray-600 hover:text-red-600 font-medium transition-colors"
        whileHover={{ x: 2 }}
      >
        Logout
      </motion.button>
    </div>
  );
}