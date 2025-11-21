import { Outlet, Link } from "react-router-dom";
import { Book, Home, Award, Settings, User } from "lucide-react";

const SidebarItem = ({ icon: Icon, label, active }) => (
  <li className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer transition-colors ${active ? 'bg-blue-50 text-brand-blue' : 'text-gray-600 hover:bg-gray-100'}`}>
    <Icon size={18} />
    <span className="text-sm font-medium">{label}</span>
  </li>
);

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 p-6 flex flex-col">
        <div className="text-xl font-bold text-brand-dark mb-10 flex items-center gap-2">
           <div className="w-6 h-6 bg-brand-accent rounded-full"></div> PPStack
        </div>
        
        <ul className="space-y-2 flex-1">
          <SidebarItem icon={Home} label="Overview" active />
          <SidebarItem icon={Book} label="My Courses" />
          <SidebarItem icon={Award} label="Certificates" />
        </ul>

        <div className="border-t pt-4 space-y-2">
            <SidebarItem icon={Settings} label="Settings" />
            <SidebarItem icon={User} label="Profile" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};
export default DashboardLayout;