import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Users, Bell, Settings, Plus, UserCircle } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Patients', path: '/patients', icon: Users },
    { name: 'Alerts', path: '/alerts', icon: Bell },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 z-10 font-sans shadow-sm">
      <div className="p-6">
        <h1 className="text-xl font-black text-primary tracking-tight">Caregiver Portal</h1>
        <p className="text-xs text-gray-500 mt-1 font-medium tracking-wide">Central Health System</p>
      </div>

      <nav className="flex-1 mt-6 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-blue-50 text-primary font-bold shadow-sm'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={`w-5 h-5 mr-4 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                {item.name}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button className="w-full bg-primary text-white flex items-center justify-center py-3 rounded-xl font-bold hover:bg-blue-800 transition shadow-md shadow-blue-200">
          <Plus className="w-5 h-5 mr-2" />
          Add New Patient
        </button>
      </div>

      <div className="p-4 border-t border-gray-100 flex items-center">
        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center overflow-hidden">
          <img src="https://i.pravatar.cc/150?img=47" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-bold text-gray-900">Dr. Sarah Chen</p>
          <p className="text-xs text-gray-500">Chief Resident</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
