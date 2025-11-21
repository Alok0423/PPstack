import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Courses from './pages/Courses'; // <-- Import this
import DashboardLayout from './layouts/DashboardLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />  {/* <-- Add this route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        
        <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<div className="p-4">Dashboard Home</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;