import { motion } from "framer-motion";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg";
  
  const variants = {
    primary: "bg-pink-gradient text-white hover:shadow-pink-500/30",
    secondary: "bg-white text-brand-dark border border-brand-dark hover:bg-gray-50",
    outline: "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-dark"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
export default Button;