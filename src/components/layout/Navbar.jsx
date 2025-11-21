import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-nav text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-accent rounded-full"></div>
            PPStack
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/courses" className="hover:text-brand-accent transition-colors">Courses</Link>
            <Link to="#" className="hover:text-brand-accent transition-colors">Mentors</Link>
            <Link to="#" className="hover:text-brand-accent transition-colors">Enterprise</Link>
            <Link to="/login">
                <Button variant="outline" className="px-4 py-2 !text-white !border-white hover:!bg-white hover:!text-brand-dark">
                    Log In
                </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark p-4 absolute w-full">
          <div className="flex flex-col gap-4">
            <Link to="/courses" className="block">Courses</Link>
            <Link to="/login" className="block">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;