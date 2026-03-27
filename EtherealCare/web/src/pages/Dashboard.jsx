import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, CheckCircle2, AlertTriangle, ChevronRight, Activity } from 'lucide-react';

const data = [
  { name: 'MON', adherence: 65 },
  { name: 'TUE', adherence: 45 },
  { name: 'WED', adherence: 55 },
  { name: 'THU', adherence: 40 },
  { name: 'FRI', adherence: 80 },
  { name: 'SAT', adherence: 90 },
  { name: 'SUN', adherence: 75 },
];

const Dashboard = () => {
  return (
    <div className="flex space-x-6">
      <div className="flex-1">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Good Morning, Sarah</h1>
        <p className="text-gray-500 mt-2 mb-8 font-medium">Here is your clinical overview for today, October 24th.</p>

        {/* Top Stats */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-blue-50 text-primary p-3 rounded-2xl">
                <Users className="w-6 h-6" />
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">+4 this week</span>
            </div>
            <div className="mt-6">
              <p className="text-gray-500 text-sm font-bold tracking-widest uppercase">Total Patients</p>
              <p className="text-5xl font-black tracking-tighter text-gray-900 mt-1">1,284</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
             <div className="flex justify-between items-start">
              <div className="bg-green-50 text-success p-3 rounded-2xl">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-success font-black text-xl">94.2%</span>
            </div>
            <div className="mt-6">
              <p className="text-gray-500 text-sm font-bold tracking-widest uppercase">Avg. Adherence</p>
              <p className="text-5xl font-black tracking-tighter text-gray-900 mt-1">Healthy</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden">
             <div className="flex justify-between items-start">
              <div className="bg-red-50 text-danger p-3 rounded-2xl relative z-10">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <span className="bg-red-100 text-danger text-xs font-bold px-3 py-1 rounded-full z-10">Requires Action</span>
            </div>
            <div className="mt-6 relative z-10">
              <p className="text-gray-500 text-sm font-bold tracking-widest uppercase">Missed Today</p>
              <p className="text-5xl font-black tracking-tighter text-gray-900 mt-1">12</p>
            </div>
          </div>
        </div>

        {/* Chart & Meds */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-xl font-black text-gray-900 leading-tight">Weekly Adherence<br/>Performance</h2>
                <p className="text-gray-400 text-sm mt-1">System-wide trend over the last 7 days</p>
              </div>
              <div className="flex bg-gray-50 rounded-full p-1">
                <button className="px-4 py-1 text-sm font-bold text-gray-500 rounded-full">DAY</button>
                <button className="px-4 py-1 text-sm font-bold bg-primary text-white rounded-full shadow-md">WEEK</button>
                <button className="px-4 py-1 text-sm font-bold text-gray-500 rounded-full">MONTH</button>
              </div>
            </div>
            <div className="h-48 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorAdherence" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1858A9" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#1858A9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 10, fontWeight: 'bold'}} dy={10} />
                  <Tooltip cursor={{ stroke: '#E5E7EB', strokeWidth: 1, strokeDasharray: '3 3' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Area type="monotone" dataKey="adherence" stroke="#1858A9" strokeWidth={4} fillOpacity={1} fill="url(#colorAdherence)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="flex flex-col space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex-1">
              <h2 className="text-lg font-black flex items-center"><Activity className="w-5 h-5 mr-2 text-primary"/> Medication Usage</h2>
              <div className="space-y-4 mt-6">
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase text-gray-500 tracking-wider mb-2"><span>Lisinopril</span><span>82%</span></div>
                  <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-primary h-2 rounded-full" style={{width: '82%'}}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase text-gray-500 tracking-wider mb-2"><span>Metformin</span><span>64%</span></div>
                  <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-primary h-2 rounded-full" style={{width: '64%'}}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase text-gray-500 tracking-wider mb-2"><span>Atorvastatin</span><span>91%</span></div>
                  <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-success h-2 rounded-full" style={{width: '91%'}}></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="col-start-2 bg-primary rounded-3xl p-6 text-white shadow-xl shadow-blue-200 relative overflow-hidden">
            <h2 className="text-xl font-bold z-10 relative">Adherence Tip</h2>
            <p className="mt-2 text-blue-100 z-10 relative">Patients on evening regimens show 15% higher adherence when using smart dispensers.</p>
            <button className="mt-6 bg-white text-primary px-6 py-2 rounded-xl font-bold z-10 relative">Read Insights</button>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-5 rounded-full z-0"></div>
          </div>
        </div>

      </div>

      {/* Right Sidebar - Recent Alerts */}
      <div className="w-80">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-black text-gray-900">Recent Alerts</h2>
            <span className="bg-red-50 text-danger text-xs font-bold px-2 py-1 rounded-lg">12</span>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="border border-red-200 rounded-2xl p-4 bg-white shadow-sm border-l-4 border-l-danger">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <img src="https://i.pravatar.cc/150?img=1" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h3 className="font-bold text-gray-900">Eleanor Vance</h3>
                  </div>
                </div>
                <span className="text-xs font-bold text-danger">12M AGO</span>
              </div>
              <p className="text-sm text-gray-600 mt-3 font-medium">Missed <span className="font-bold text-gray-900">Warfarin 5mg</span> morning dose.</p>
              <div className="flex mt-4 space-x-2">
                <button className="bg-danger text-white px-4 py-2 rounded-xl text-xs font-bold flex-1 text-center">CALL</button>
                <button className="bg-gray-50 text-gray-500 px-4 py-2 rounded-xl text-xs font-bold">...</button>
              </div>
            </div>

            <div className="border border-red-200 rounded-2xl p-4 bg-white shadow-sm border-l-4 border-l-danger">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <img src="https://i.pravatar.cc/150?img=68" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h3 className="font-bold text-gray-900">Albert Ross</h3>
                  </div>
                </div>
                <span className="text-xs font-bold text-danger">45M AGO</span>
              </div>
              <p className="text-sm text-gray-600 mt-3 font-medium">Missed <span className="font-bold text-gray-900">Metformin 500mg</span> breakfast dose.</p>
              <div className="flex mt-4 space-x-2">
                <button className="bg-danger text-white px-4 py-2 rounded-xl text-xs font-bold flex-1 text-center">CALL</button>
                <button className="bg-gray-50 text-gray-500 px-4 py-2 rounded-xl text-xs font-bold">...</button>
              </div>
            </div>

            <div className="border border-gray-100 rounded-2xl p-4 bg-white shadow-sm">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <img src="https://i.pravatar.cc/150?img=44" className="w-10 h-10 rounded-full mr-3 grayscale" />
                  <div>
                    <h3 className="font-bold text-gray-900">Margaret Li</h3>
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-400">2H AGO</span>
              </div>
              <p className="text-sm text-gray-500 mt-3">Dosage notification dismissed by patient.</p>
            </div>
          </div>

          <button className="w-full py-4 border border-gray-200 rounded-2xl mt-4 font-bold text-gray-600 hover:bg-gray-50 transition">View All Alerts</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
