import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Search, Bell, UserCircle } from 'lucide-react';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans flex text-gray-800">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        
        {/* Top Header */}
        <header className="h-20 bg-[#FDFBF7] flex items-center justify-between px-10 py-5">
          <div className="flex-1 max-w-2xl relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              className="w-full bg-gray-100 border-none rounded-2xl py-3 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-gray-400" 
              placeholder="Search patients, medical IDs..." 
            />
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#FDFBF7]"></span>
            </button>
            <div className="flex items-center">
              <div className="text-right mr-3">
                <p className="text-sm font-bold">Dr. Sarah Chen</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
              <img src="https://i.pravatar.cc/150?img=47" alt="Dr" className="w-10 h-10 rounded-full shadow-sm" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 px-10 pb-10 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default Layout;
