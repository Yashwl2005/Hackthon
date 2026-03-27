import React from 'react';
import { Filter, UserCircle2, MoreVertical, AlertTriangle } from 'lucide-react';

const patients = [
  { id: '#8821-XP', name: 'Eleanor Martin', age: 74, status: 'Active', adherence: 92, initial: 'EM' },
  { id: '#4432-TQ', name: 'Robert Harrison', age: 68, status: 'Active', adherence: 45, initial: 'RH' },
  { id: '#1109-LA', name: 'Martha Wright', age: 82, status: 'Inactive', adherence: 0, initial: 'MW' },
  { id: '#9032-VB', name: 'James Sullivan', age: 62, status: 'Active', adherence: 78, initial: 'JS' },
];

const Patients = () => {
  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-black text-gray-900 tracking-tight">Patient Directory</h1>
      <p className="text-gray-500 mt-2 font-medium">Manage and monitor adherence across 124 active patients.</p>

      {/* Filters */}
      <div className="bg-[#FAF8F5] p-4 rounded-3xl border border-gray-100 flex items-center justify-between mt-8 mb-6">
        <div className="flex space-x-3">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold flex items-center">
            <Filter className="w-4 h-4 mr-2" /> Status: All
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold flex items-center">
            <Filter className="w-4 h-4 mr-2" /> Adherence: {'>'}80%
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold flex items-center">
            Last Visit
          </button>
        </div>
        <button className="text-primary font-bold text-sm px-4">Clear all filters</button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-8 py-5 border-b border-gray-50 text-xs font-bold text-gray-500 uppercase tracking-widest">
          <div className="col-span-4">Name</div>
          <div className="col-span-2">Age</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-3">Adherence</div>
          <div className="col-span-1 text-center">Actions</div>
        </div>

        <div className="divide-y divide-gray-50">
          {patients.map((p, i) => (
            <div key={i} className="grid grid-cols-12 gap-4 px-8 py-6 items-center hover:bg-gray-50 transition cursor-pointer">
              <div className="col-span-4 flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg 
                  ${p.initial === 'EM' ? 'bg-blue-100 text-primary' : 
                    p.initial === 'RH' ? 'bg-orange-100 text-orange-600' :
                    p.initial === 'JS' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-500'}`}>
                  {p.initial}
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900 text-lg">{p.name}</p>
                  <p className="text-gray-400 text-xs font-medium mt-0.5">ID: {p.id}</p>
                </div>
              </div>
              <div className="col-span-2 font-medium text-gray-700">{p.age}</div>
              <div className="col-span-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center w-fit
                  ${p.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full mr-2 ${p.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                  {p.status}
                </span>
              </div>
              <div className="col-span-3 flex items-center">
                <div className="w-32 bg-gray-100 rounded-full h-2.5 mr-4">
                  <div className={`h-2.5 rounded-full ${p.adherence > 80 ? 'bg-success' : p.adherence > 0 ? (p.initial==='RH' ? 'bg-danger' : 'bg-primary') : 'bg-gray-300'}`} style={{width: `${p.adherence}%`}}></div>
                </div>
                <span className={`font-black ${p.adherence > 80 ? 'text-success' : p.adherence > 0 ? (p.initial==='RH' ? 'text-danger' : 'text-primary') : 'text-gray-400'}`}>{p.adherence}%</span>
              </div>
              <div className="col-span-1 flex justify-center">
                <button className="text-gray-400 hover:text-gray-700"><MoreVertical className="w-5 h-5"/></button>
              </div>
            </div>
          ))}
        </div>

        <div className="px-8 py-5 border-t border-gray-50 flex items-center justify-between text-sm font-medium text-gray-500">
          <span>Showing <strong className="text-gray-900">1-4</strong> of 124 patients</span>
          <div className="flex space-x-1">
            <button className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-200 text-gray-400">{'<'}</button>
            <button className="w-8 h-8 rounded-lg bg-primary text-white font-bold flex items-center justify-center">1</button>
            <button className="w-8 h-8 rounded-lg hover:bg-gray-50 flex items-center justify-center text-gray-600 font-bold">2</button>
            <button className="w-8 h-8 rounded-lg hover:bg-gray-50 flex items-center justify-center text-gray-600 font-bold">3</button>
            <button className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-200 text-gray-600 font-bold">{'>'}</button>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="bg-[#EBF1F9] rounded-3xl p-6 border border-[#D5E1F2]">
          <div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
            <div className="w-5 h-5 bg-primary rounded-md flex items-center justify-center"><span className="text-white text-[10px] font-bold">+</span></div>
          </div>
          <p className="font-bold text-gray-800 uppercase tracking-widest text-xs">Average Adherence</p>
          <p className="text-4xl font-black text-primary mt-2">84.2%</p>
          <p className="text-gray-500 text-sm mt-2 font-medium">+2.4% from last month</p>
        </div>

        <div className="bg-[#FCECEE] rounded-3xl p-6 border border-[#F3D7DA]">
          <div className="bg-danger/10 w-10 h-10 rounded-xl flex items-center justify-center mb-4 cursor-pointer">
            <AlertTriangle className="w-5 h-5 text-danger" />
          </div>
          <p className="font-bold text-gray-800 uppercase tracking-widest text-xs">Critical Alerts</p>
          <p className="text-4xl font-black text-danger mt-2">12</p>
          <p className="text-gray-500 text-sm mt-2 font-medium">Requiring immediate attention</p>
        </div>

        <div className="bg-[#EAF3EA] rounded-3xl p-6 border border-[#D0E6D5]">
          <div className="bg-success/10 w-10 h-10 rounded-xl flex items-center justify-center mb-4 cursor-pointer">
            <div className="bg-success rounded-full w-5 h-5 flex items-center justify-center"><span className="text-white font-bold text-[10px]">✓</span></div>
          </div>
          <p className="font-bold text-gray-800 uppercase tracking-widest text-xs">Fully Compliant</p>
          <p className="text-4xl font-black text-success mt-2">56</p>
          <p className="text-gray-500 text-sm mt-2 font-medium">Patients with 100% adherence</p>
        </div>
      </div>
    </div>
  );
};

export default Patients;
