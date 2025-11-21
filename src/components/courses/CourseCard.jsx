import { motion } from "framer-motion";
import { Globe } from "lucide-react"; // Placeholder for partner logos

const CourseCard = ({ type, title, description, partner, color }) => {
  // Badge styling based on type
  const isShort = type === "Short Course";
  const badgeStyle = isShort 
    ? "bg-orange-100 text-orange-700 border-orange-200" 
    : "bg-blue-100 text-blue-700 border-blue-200";

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between h-full transition-all duration-300 hover:border-brand-blue/30 cursor-pointer"
    >
      <div>
        {/* Badge */}
        <span className={`inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wide mb-4 border ${badgeStyle}`}>
          {type}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-brand-dark mb-3 leading-tight group-hover:text-brand-blue transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-3 mb-6 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Footer / Partner */}
      <div className="flex items-center gap-2 pt-4 border-t border-gray-100 mt-auto">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${color || "bg-red-500"} text-white`}>
            {/* Simulated Logo */}
            <Globe size={14} />
        </div>
        <span className="text-sm font-medium text-gray-600">{partner}</span>
      </div>
    </motion.div>
  );
};
export default CourseCard;