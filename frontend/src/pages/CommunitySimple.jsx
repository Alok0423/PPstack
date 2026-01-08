import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar } from 'lucide-react';

export default function CommunitySimple() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Community</h1>
          <p className="text-gray-600 mt-2">A friendly space to ask questions, share resources, and join events.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -6 }} className="p-6 rounded-lg border shadow-sm">
            <div className="flex items-center gap-3 mb-3"><Users className="text-indigo-600" /> <h4 className="font-semibold">Discussion Forums</h4></div>
            <p className="text-sm text-gray-600">Browse topics and join conversations.</p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="p-6 rounded-lg border shadow-sm">
            <div className="flex items-center gap-3 mb-3"><Calendar className="text-indigo-600" /> <h4 className="font-semibold">Live Events</h4></div>
            <p className="text-sm text-gray-600">Upcoming workshops and AMAs.</p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="p-6 rounded-lg border shadow-sm">
            <h4 className="font-semibold">Study Groups</h4>
            <p className="text-sm text-gray-600">Join a small group to stay accountable.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
