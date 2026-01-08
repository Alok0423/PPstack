import React from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, Layers } from 'lucide-react';

const CategoryCard = ({ title, desc }) => (
  <motion.div whileHover={{ y: -6 }} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
    <h4 className="font-semibold text-lg text-gray-900">{title}</h4>
    <p className="text-sm text-gray-500 mt-2">{desc}</p>
  </motion.div>
);

export default function Explore() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold">Explore</h1>
            <p className="text-gray-600 mt-1">Discover roles, topics and curated learning paths.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-sm border border-gray-100">
              <Search className="text-gray-400 w-4 h-4 mr-2" />
              <input placeholder="Search courses, topics, skills" className="outline-none text-sm" />
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Browse</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard title="Data Science" desc="Statistics, ML, and data tools." />
          <CategoryCard title="Web Development" desc="Frontend, backend, and full-stack." />
          <CategoryCard title="Cloud & DevOps" desc="Infrastructure, CI/CD and scaling." />
        </div>

        <div className="mt-10 bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-lg mb-3">Featured paths</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border hover:shadow transition">Full-Stack Web Developer</div>
            <div className="p-4 rounded-lg border hover:shadow transition">Data Analyst to ML Engineer</div>
            <div className="p-4 rounded-lg border hover:shadow transition">Cloud Architect Roadmap</div>
          </div>
        </div>
      </div>
    </div>
  );
}
