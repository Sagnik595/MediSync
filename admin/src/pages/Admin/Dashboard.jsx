import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const Dashboard = () => {

  const {getallDoctors, doctors} = useContext(AdminContext)
  useEffect(()=>{
    getallDoctors();
  },[])

  const cancelAppointment = (item)=>{
    
  }
  
  const stats = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      count: `${doctors.length}`,
      label: "Doctors",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      count: "xx",
      label: "Appointments",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      count: "xx",
      label: "Patients",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 max-w-2xl">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-4 flex items-center gap-3 shadow-sm"
          >
            <div className="bg-blue-50 p-2.5 rounded-lg text-blue-600">
              {stat.icon}
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-800">
                {stat.count}
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Appointment Card */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm max-w-2xl">
        {/* Card Header */}
        <div className="px-4 py-3.5 border-b border-gray-200 flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h2 className="text-sm font-medium text-gray-700">
            Doctors Added
          </h2>
        </div>

        {/* Appointments List */}
        <div className="divide-y divide-gray-100">
          {doctors.map((item) => (
            <div
              key={item.id}
              className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              {/* Left Side - Avatar and Info */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.date.split('T',1)}</p>
                </div>
              </div>

              {/* Right Side - Cancel Button */}
              <button
                onClick={()=>{}}
                className="w-7 h-7 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors flex items-center justify-center text-sm font-medium"
                aria-label="Cancel appointment"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;