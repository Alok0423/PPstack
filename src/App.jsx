import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail'; // <--- Import the new page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      
      {/* THE DYNAMIC ROUTE */}
      {/* :id is a variable placeholder */}
      <Route path="/course/:id" element={<CourseDetail />} />
    </Routes>
  );
}

export default App;