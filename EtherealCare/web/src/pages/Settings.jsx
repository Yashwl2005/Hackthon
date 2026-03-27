import React from 'react';
import { Plus } from 'lucide-react';

const Settings = () => {
  return (
    <div className="max-w-4xl pb-20">
      <h1 className="text-4xl font-black text-gray-900 tracking-tight">Settings</h1>
      <p className="text-gray-500 mt-2 mb-10 font-medium tracking-wide">Manage your system preferences and care team</p>

      {/* User Management */}
      <div className="mb-12">
        <div className="flex justify-between items-end border-l-4 border-primary pl-4 mb-6">
          <h2 className="text-2xl font-black text-gray-900">User Management</h2>
          <button className="text-primary font-bold text-sm bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition flex items-center">
            <Plus className="w-4 h-4 mr-1"/> Invite Member
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center">
              <img src="https://i.pravatar.cc/150?img=11" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-bold text-gray-900">Marcus Thorne</p>
                <p className="text-xs text-gray-500 font-medium">Lead Caregiver</p>
              </div>
            </div>
            <span className="bg-blue-50 text-primary text-xs font-bold px-3 py-1 rounded-full">Admin</span>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center">
              <img src="https://i.pravatar.cc/150?img=5" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-bold text-gray-900">Elena Rodriguez</p>
                <p className="text-xs text-gray-500 font-medium">Night Shift Nurse</p>
              </div>
            </div>
            <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">Editor</span>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center">
              <img src="https://i.pravatar.cc/150?img=8" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-bold text-gray-900">Dr. James Wilson</p>
                <p className="text-xs text-gray-500 font-medium">Primary Physician</p>
              </div>
            </div>
            <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">Viewer</span>
          </div>

          <button className="border-2 border-dashed border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-gray-400 hover:text-primary hover:border-primary hover:bg-blue-50 transition cursor-pointer">
            <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mb-2">
              <Plus className="w-5 h-5 text-gray-500"/>
            </div>
            <span className="text-sm font-bold text-gray-500">Add Team Member</span>
          </button>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="mb-12">
        <div className="border-l-4 border-primary pl-4 mb-6">
          <h2 className="text-2xl font-black text-gray-900">Notification Preferences</h2>
        </div>
        
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-2xl mr-4"><div className="w-4 h-4 bg-primary rounded-full"></div></div>
              <div>
                <h3 className="font-black text-gray-900">SMS Notifications</h3>
                <p className="text-sm text-gray-500 mt-1 font-medium">Receive urgent alerts via text message to your registered phone.</p>
              </div>
            </div>
            {/* Toggle Active */}
            <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer shadow-inner">
              <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
            </div>
          </div>

          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-2xl mr-4"><div className="w-4 h-4 bg-success rounded-xl"></div></div>
              <div>
                <h3 className="font-black text-gray-900">Email Summaries</h3>
                <p className="text-sm text-gray-500 mt-1 font-medium">Daily and weekly medication adherence reports sent to your inbox.</p>
              </div>
            </div>
            {/* Toggle Active */}
            <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer shadow-inner">
              <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
            </div>
          </div>

          <div className="p-6 flex items-center justify-between">
            <div className="flex items-start">
              <div className="bg-red-50 p-3 rounded-2xl mr-4"><div className="w-4 h-4 bg-danger opacity-50 rounded-md"></div></div>
              <div>
                <h3 className="font-black text-gray-900">App Notifications</h3>
                <p className="text-sm text-gray-500 mt-1 font-medium">Real-time push notifications for missed doses and critical events.</p>
              </div>
            </div>
            {/* Toggle Inactive */}
            <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer border border-gray-300">
              <div className="w-5 h-5 bg-white rounded-full absolute top-[1px] left-[1px] shadow-sm"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Accessibility */}
      <div>
        <div className="border-l-4 border-primary pl-4 mb-6">
          <h2 className="text-2xl font-black text-gray-900">Accessibility</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-black text-gray-900">High Contrast Mode</h3>
                <p className="text-sm text-gray-500 mt-1 font-medium">Increases visibility for visual impairments.</p>
              </div>
              <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer border border-gray-300">
                <div className="w-5 h-5 bg-white rounded-full absolute top-[1px] left-[1px] shadow-sm"></div>
              </div>
            </div>
            <div className="w-full bg-gray-100 h-1 mt-6"><div className="w-1/3 bg-success h-1 absolute"></div></div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
            <h3 className="font-black text-gray-900">Font Size Adjustment</h3>
            <p className="text-sm text-gray-500 mt-1 font-medium">Current scale: <span className="text-primary font-bold">120% (Large)</span></p>
            
            <div className="mt-8 flex items-center justify-between text-xs font-bold text-gray-400 mb-2">
              <span>Standard</span>
              <span>Medium</span>
              <span className="text-primary">Large</span>
              <span>Extra</span>
            </div>
            <div className="relative w-full h-1 bg-gray-200 rounded-full">
              <div className="absolute top-0 left-0 h-1 bg-primary w-2/3 rounded-full"></div>
              <div className="absolute -top-1.5 left-2/3 w-4 h-4 bg-primary border-2 border-white rounded-full shadow-md cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-12 space-x-4">
        <button className="px-6 py-3 font-bold text-gray-600 hover:text-gray-900 transition">Discard Changes</button>
        <button className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-200">Save Preferences</button>
      </div>

    </div>
  );
};

export default Settings;
