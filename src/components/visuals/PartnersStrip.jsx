import { motion } from 'framer-motion';

const partners = [
  "OpenAI", "Microsoft", "Google Cloud", "Hugging Face", "LangChain", "Stanford"
];

const PartnersStrip = () => {
  return (
    <div className="py-10 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">In Collaboration With</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          {partners.map((partner, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-xl md:text-2xl font-bold text-gray-500 hover:text-brand-blue transition-colors cursor-default"
            >
              {partner}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersStrip;