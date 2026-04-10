import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorList = () => {
  const { doctors, aToken, getallDoctors, changeAvailability } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) getallDoctors();
  }, [aToken]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-1">
              All Doctors
            </h1>
          </div>
          <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-200 transform hover:scale-105 transition-transform duration-300">
            <p className="text-sm text-gray-500">Total Doctors</p>
            <p className="text-3xl font-bold text-blue-600">{doctors.length}</p>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:border-blue-400 transition-all duration-300 hover:shadow-xl active:scale-[0.98] transform hover:-translate-y-1"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
            }}
          >
            {/* Availability Tag */}
            <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm border border-gray-100">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${doctor.available ? 'bg-green-400' : 'bg-gray-400'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${doctor.available ? 'bg-green-500' : 'bg-gray-500'}`}></span>
              </span>
              <p className={`text-[10px] font-bold uppercase tracking-wider ${doctor.available ? 'text-green-600' : 'text-gray-500'}`}>
                {doctor.available ? "Available" : "Away"}
              </p>
            </div>

            {/* Doctor Image Container */}
            <div className="relative bg-blue-50 p-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-center justify-center">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-32 h-32 object-cover rounded-full relative z-10 transform group-hover:scale-110 transition-all duration-500"
                />
              </div>
            </div>

            {/* Doctor Info & Toggle Button */}
            <div className="p-4 bg-white relative">
              <div className="relative z-10">
                <p className="text-base font-semibold text-gray-900 mb-0.5 group-hover:text-blue-600 transition-colors duration-300 truncate">
                  {doctor.name}
                </p>
                <p className="text-sm text-gray-600 mb-4 truncate">
                  {doctor.speciality}
                </p>
                
                {/* Change Availability Button/Checkbox */}
                <div className="flex items-center gap-2 mt-2">
                  <input 
                    type="checkbox" 
                    checked={doctor.available} 
                    onChange={() => changeAvailability(doctor._id)} 
                    className="w-4 h-4 cursor-pointer accent-blue-600"
                    id={`available-${index}`}
                  />
                  <label 
                    htmlFor={`available-${index}`} 
                    className="text-sm text-gray-700 cursor-pointer select-none"
                  >
                    Available
                  </label>
                </div>
              </div>
            </div>

            {/* Click Ripple & Shine Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
              <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {doctors.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">No Doctors Found</h3>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default DoctorList;