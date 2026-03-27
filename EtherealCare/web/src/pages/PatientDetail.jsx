import React from 'react';
import { Download, Edit2, FileText, Settings, BadgeCheck, AlertTriangle, CheckCircle2, RotateCcw } from 'lucide-react';

const PatientDetail = () => {
  return (
    <div className="max-w-6xl">
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center">
          <div className="relative">
            <img src="https://i.pravatar.cc/150?img=11" className="w-24 h-24 rounded-3xl object-cover shadow-sm" />
            <div className="absolute -bottom-2 -right-2 bg-white rounded-xl p-1 shadow-sm">
              <div className="bg-success text-white p-1 rounded-lg">
                <BadgeCheck className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="ml-6 flex flex-col justify-center">
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">Arthur Williams</h1>
            <div className="flex items-center mt-3 space-x-4">
              <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm font-bold flex flex-col items-center">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">Age:</span>
                78
              </div>
              <div className="bg-blue-50 text-primary px-3 py-1 rounded-lg text-sm font-bold flex flex-col items-center">
                <span className="text-[10px] text-primary opacity-60 uppercase tracking-widest">ID:</span>
                PAT-0992
              </div>
              <div className="bg-green-50 text-success px-3 py-1 rounded-lg text-sm font-bold flex items-center h-full">
                <span className="mr-2">📅</span> Admitted Nov 2023
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3 mt-2">
          <button className="bg-white border border-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition shadow-sm flex items-center">
            <Download className="w-4 h-4 mr-2" /> Download Report
          </button>
          <button className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-800 transition shadow-md shadow-blue-200 flex items-center">
            <Edit2 className="w-4 h-4 mr-2" /> Edit Profile
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-4 space-y-6">
          
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm text-center relative overflow-hidden">
            <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-6">Daily Adherence</h3>
            
            <div className="relative w-40 h-40 mx-auto">
              <svg viewBox="0 0 36 36" className="w-full h-full stroke-success text-gray-100 stroke-[3]">
                <path opacity="0.2" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none"/>
                <path strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeLinecap="round"/>
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="text-4xl font-black text-gray-900 leading-none">75%</span>
                <span className="text-xs font-bold text-gray-400 mt-1">3 of 4 doses</span>
              </div>
            </div>

            <p className="mt-8 text-gray-600 font-medium">
              Arthur has missed one dose of <span className="text-danger font-bold">Lisinopril</span> today.
            </p>
          </div>

          <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold text-gray-900 tracking-widest uppercase">Caregiver Notes</h3>
              <FileText className="w-5 h-5 text-primary" />
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm">
                <p className="text-gray-700 italic text-sm leading-relaxed font-medium">"Arthur mentioned mild dizziness after the morning dose. Adjusted seating during administration."</p>
                <div className="flex items-center mt-4">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-primary flex items-center justify-center text-[10px] font-bold mr-2">SC</div>
                  <span className="text-xs font-bold text-gray-400">Sarah Chen &bull; 2h ago</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-sm">
                <p className="text-gray-700 italic text-sm leading-relaxed font-medium">"Patient was in good spirits, completed full breakfast."</p>
                <div className="flex items-center mt-4">
                  <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[10px] font-bold mr-2">JM</div>
                  <span className="text-xs font-bold text-gray-400">James Miller &bull; Yesterday</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="col-span-8 space-y-6">
          
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b border-gray-50 pb-4">
              <div>
                <h2 className="text-xl font-black text-gray-900">Today's Schedule</h2>
                <p className="text-sm font-medium text-gray-500 mt-1">Wednesday, May 22, 2024</p>
              </div>
              <button className="text-primary font-bold text-sm bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition flex items-center">
                <Settings className="w-4 h-4 mr-2" /> Adjust Schedule
              </button>
            </div>

            <div className="space-y-4">
              
              <div className="flex items-center justify-between p-4 bg-[#F2FAF5] border border-[#D1EEDC] rounded-2xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-2xl bg-success text-white flex items-center justify-center mr-4 shadow-sm shadow-green-200">💊</div>
                  <div>
                    <h3 className="font-black text-gray-900">Metformin 500mg</h3>
                    <p className="text-sm text-gray-500 font-medium mt-1">1 tablet &bull; Oral &bull; With breakfast</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-400 mb-1 tracking-widest">08:00 AM</p>
                  <span className="bg-success text-white text-xs font-bold px-3 py-1 rounded-lg flex items-center justify-end w-fit ml-auto">
                     Taken
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#FCF5F5] border border-[#FAD3D5] rounded-2xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-2xl bg-danger text-white flex items-center justify-center mr-4 shadow-sm shadow-red-200">💊</div>
                  <div>
                    <h3 className="font-black text-gray-900">Lisinopril 10mg</h3>
                    <p className="text-sm text-gray-500 font-medium mt-1">1 tablet &bull; Oral &bull; After meal</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-400 mb-1 tracking-widest">12:00 PM</p>
                  <span className="bg-danger text-white text-xs font-bold px-3 py-1 rounded-lg flex items-center justify-end w-fit ml-auto">
                     Missed
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-2xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-primary flex items-center justify-center mr-4">💊</div>
                  <div>
                    <h3 className="font-black text-gray-900">Atorvastatin 40mg</h3>
                    <p className="text-sm text-gray-500 font-medium mt-1">1 tablet &bull; Oral &bull; Before bedtime</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-400 mb-1 tracking-widest">09:00 PM</p>
                  <button className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-xl hover:bg-blue-800 transition shadow-sm">
                    Mark as Taken
                  </button>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm h-full">
            <h2 className="text-xl font-black text-gray-900 mb-6">Adherence History</h2>

            <div className="relative border-l-2 border-gray-100 ml-4 pl-8 space-y-8 py-2">
              
              <div className="relative">
                <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-success text-whiteflex items-center justify-center flex items-center justify-center border-4 border-white shadow-sm font-bold">✓</div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-900">Yesterday, May 21</h4>
                    <p className="text-sm text-gray-500 font-medium mt-1">100% Compliance. All 4 doses recorded on time.</p>
                  </div>
                  <span className="bg-green-100 text-success text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md">Perfect</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center border-4 border-white shadow-sm"><RotateCcw className="w-4 h-4" /></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-900">May 20, 2024</h4>
                    <p className="text-sm text-gray-500 font-medium mt-1">75% Compliance. Lisinopril delayed by 2 hours due to patient therapy session.</p>
                  </div>
                  <span className="bg-gray-100 text-gray-500 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md">Recorded</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-danger text-white flex items-center justify-center border-4 border-white shadow-sm"><AlertTriangle className="w-4 h-4" /></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-900">May 19, 2024</h4>
                    <p className="text-sm text-gray-500 font-medium mt-1">50% Compliance. Two doses missed. Caregiver alert was triggered at 12:30 PM.</p>
                  </div>
                  <span className="bg-red-50 text-danger text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md">Alert</span>
                </div>
              </div>

            </div>

            <button className="w-full py-4 border border-gray-200 rounded-2xl mt-8 font-bold text-gray-600 hover:bg-gray-50 transition">View Full History Log</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PatientDetail;
