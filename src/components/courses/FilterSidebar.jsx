import { Search } from "lucide-react";

const FilterSection = ({ title, options }) => (
  <div className="mb-8">
    <h4 className="font-bold text-gray-900 mb-3 text-sm">{title}</h4>
    <div className="space-y-2">
      {options.map((opt, idx) => (
        <label key={idx} className="flex items-center gap-3 cursor-pointer group">
          <div className="relative flex items-center">
            <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded checked:bg-brand-blue checked:border-brand-blue transition-colors" />
            <svg className="absolute w-3 h-3 text-white left-1 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span className="text-gray-600 text-sm group-hover:text-brand-blue transition-colors">{opt}</span>
        </label>
      ))}
    </div>
  </div>
);

const FilterSidebar = () => {
  return (
    <div className="w-full md:w-64 flex-shrink-0">
      {/* Search Input */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none text-sm"
        />
      </div>

      {/* Filters */}
      <div className="pr-4">
        <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-400 uppercase text-xs tracking-wider">Filters</h3>
            <button className="text-xs text-brand-blue font-semibold hover:underline">Clear All</button>
        </div>
        
        <FilterSection 
            title="Course Type" 
            options={["Short Course", "Course", "Specialization", "Professional Certificate"]} 
        />
        
        <FilterSection 
            title="Level" 
            options={["Beginner", "Intermediate", "Advanced"]} 
        />
        
        <FilterSection 
            title="Subject" 
            options={["Generative AI", "Large Language Models", "Python", "Web Development"]} 
        />
      </div>
    </div>
  );
};

export default FilterSidebar;