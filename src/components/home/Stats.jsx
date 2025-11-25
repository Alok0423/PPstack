import React from 'react';

const Stats = () => {
  const stats = [
    { label: "Hiring Partners", value: "800+" },
    { label: "Active Learners", value: "15,000+" },
    { label: "Highest CTC", value: "₹1.5 Cr" },
    { label: "Average Hike", value: "150%" },
  ];

  return (
    <div className="bg-white border-b border-gray-100 relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left md:pl-8 first:pl-0">
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;