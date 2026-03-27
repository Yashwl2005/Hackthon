import React from 'react';
import { AlertTriangle, MapPin, Loader2, ArrowRight } from 'lucide-react';

const Alerts = () => {
  return (
    <div className="max-w-4xl pb-10">
      <h1 className="text-4xl font-black text-gray-900 tracking-tight">Urgent Notifications</h1>
      <p className="text-gray-500 mt-2 mb-10 font-medium">Critical system alerts regarding patient medication adherence and wellness thresholds.</p>

      <div className="mb-6 flex items-center">
        <div className="w-2 h-2 rounded-full bg-danger mr-3 animate-pulse"></div>
        <h2 className="text-sm font-bold text-danger tracking-widest uppercase">Immediate Action Required</h2>
      </div>

      <div className="space-y-4 mb-10">
        
        {/* Critical Alert 1 */}
        <div className="bg-[#FCF5F5] border border-[#FAD3D5] rounded-3xl p-6 flex items-start justify-between shadow-sm">
          <div className="flex items-start pr-10">
            <div className="bg-danger text-white p-4 rounded-2xl mr-5 shadow-sm shadow-red-200">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center mb-1">
                <h3 className="text-xl font-black text-gray-900 mr-3">Missed Critical Dose</h3>
                <span className="bg-danger text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg">Overdue 4H</span>
              </div>
              <p className="text-gray-600 font-medium text-lg leading-snug">Patient: <span className="font-bold">Arthur Miller</span> &bull; Meds: <span className="font-bold">Warfarin 5mg</span></p>
              <p className="text-gray-500 text-sm mt-3 font-medium">Last attempted sync at 08:45 AM. Medication remained in dispenser.</p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 shrink-0">
            <button className="bg-white border border-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition shadow-sm">Mark as Resolved</button>
            <button className="bg-danger text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition flex items-center justify-center shadow-md shadow-red-200">
              <ArrowRight className="w-4 h-4 mr-2" /> Notify Caregiver
            </button>
          </div>
        </div>

        {/* Critical Alert 2 */}
        <div className="bg-[#FCF5F5] border border-[#FAD3D5] rounded-3xl p-6 flex items-start justify-between shadow-sm">
          <div className="flex items-start pr-10">
            <div className="bg-danger text-white p-4 rounded-2xl mr-5 shadow-sm shadow-red-200">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">🌡</div>
            </div>
            <div>
              <div className="flex items-center mb-1">
                <h3 className="text-xl font-black text-gray-900 mr-3">Abnormal Vitals Detected</h3>
                <span className="bg-danger text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg">Critical</span>
              </div>
              <p className="text-gray-600 font-medium text-lg leading-snug">Patient: <span className="font-bold">Elena Rodriguez</span> &bull; Reading: <span className="font-bold text-danger">BP 185/110</span></p>
              <p className="text-gray-500 text-sm mt-3 font-medium">Detected via connected wearable after missed morning Beta-blocker.</p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 shrink-0">
            <button className="bg-white border border-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition shadow-sm">Mark as Resolved</button>
            <button className="bg-danger text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition flex items-center justify-center shadow-md shadow-red-200">
              <ArrowRight className="w-4 h-4 mr-2" /> Notify Caregiver
            </button>
          </div>
        </div>

      </div>

      <div className="mb-6 flex items-center">
        <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase">General Updates</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex items-start">
          <div className="bg-blue-50 text-primary p-4 rounded-2xl mr-4">
             <div className="w-6 h-6 flex items-center justify-center font-bold">📦</div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-black text-gray-900">Refill Reminder</h3>
            <p className="text-gray-500 text-sm mt-2 font-medium leading-relaxed">James Wilson's Metformin supply is below 7 days. Prescription renewal suggested.</p>
            <div className="flex mt-6 space-x-3">
              <button className="bg-green-100 text-success font-bold px-4 py-2 text-sm rounded-xl">Mark Seen</button>
              <button className="bg-primary text-white font-bold px-4 py-2 text-sm rounded-xl shadow-sm shadow-blue-200">Order Refill</button>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex items-start relative overflow-hidden">
          <div className="bg-blue-50 text-primary p-4 rounded-2xl mr-4 z-10">
             <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="flex-1 z-10">
            <h3 className="text-lg font-black text-gray-900">Adherence Milestone</h3>
            <p className="text-gray-500 text-sm mt-2 font-medium leading-relaxed">Sarah Jenkins reached 30 days of perfect adherence for Vitamin D supplements.</p>
            <div className="flex mt-6 space-x-3">
              <button className="bg-green-100 text-success font-bold px-4 py-2 text-sm rounded-xl">Mark Seen</button>
              <button className="bg-primary text-white font-bold px-4 py-2 text-sm rounded-xl shadow-sm shadow-blue-200">Send Praise</button>
            </div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-xl z-0"></div>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full text-white flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-200 z-10 hover:scale-105 transition">+</button>
        </div>

      </div>

      <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center text-sm font-bold text-gray-400">
        <div className="flex items-center space-x-6 relative">
          <span className="flex items-center text-gray-600"><div className="w-2 h-2 bg-success rounded-full mr-2"></div>System Status: Healthy</span>
          <span>&bull;</span>
          <span>Last Sync: Just Now</span>
        </div>
        <div className="flex space-x-6">
          <button className="hover:text-primary transition">Notification Settings</button>
          <button className="hover:text-primary transition">Alert Protocols</button>
          <button className="hover:text-primary transition">Export Log</button>
        </div>
      </div>
    </div>
  );
};

// CheckCircle2 icon missing locally in Alerts block, using Lucide
import { CheckCircle2 } from 'lucide-react';

export default Alerts;
