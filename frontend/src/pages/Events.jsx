import React from 'react';
import { Link } from 'react-router-dom';

const mockEvents = [
  { id: 1, title: 'Live: Building Scalable APIs', date: '2026-01-15 16:00' },
  { id: 2, title: 'AMA with Senior Engineers', date: '2026-01-22 18:00' },
];

const Events = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Live Events</h1>
        <Link to="/events/schedule" className="text-sm bg-indigo-600 text-white px-3 py-2 rounded-lg">View Schedule</Link>
      </div>

      <div className="space-y-4">
        {mockEvents.map(ev => (
          <div key={ev.id} className="p-4 bg-white rounded-lg border flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{ev.title}</h3>
              <p className="text-sm text-gray-500">{ev.date}</p>
            </div>
            <div>
              <button className="px-3 py-2 rounded-lg bg-green-600 text-white">Join</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
