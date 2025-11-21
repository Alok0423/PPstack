import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Input = ({ type, placeholder }) => (
  <div className="mb-4 group">
    <input 
      type={type} 
      placeholder={placeholder}
      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-500/10 transition-all"
    />
  </div>
);

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-100"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-brand-dark">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Enter your details to access your dashboard.</p>
        </div>

        <form>
          <Input type="email" placeholder="Email Address" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full mt-4 justify-center flex">Sign In</Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Don't have an account? <Link to="/signup" className="text-brand-blue font-semibold">Sign up</Link>
        </div>
      </motion.div>
    </div>
  );
};
export default Login;