import React from 'react';
import { Link } from 'react-router-dom';

const mockThreads = [
  { id: 1, title: 'How to structure React project?', author: 'Asha', replies: 12 },
  { id: 2, title: 'Best resources for Node scaling', author: 'Ravi', replies: 5 },
  { id: 3, title: 'Interview tips for backend roles', author: 'Meera', replies: 8 },
];

const Forums = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Discussion Forums</h1>
        <Link to="/forums/new" className="text-sm bg-indigo-600 text-white px-3 py-2 rounded-lg">New Topic</Link>
      </div>

      <div className="space-y-4">
        {mockThreads.map(thread => (
          <Link key={thread.id} to={`/forums/${thread.id}`} className="block p-4 bg-white rounded-lg border hover:shadow transition">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{thread.title}</h3>
              <span className="text-xs text-gray-400">{thread.replies} replies</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">Started by {thread.author}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Forums;
