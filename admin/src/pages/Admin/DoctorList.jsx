import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorList = () => {
  const { doctors, aToken, getallDoctors } = useContext(AdminContext);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    if (aToken) getallDoctors();
  }, [aToken]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      {/* Header Section */}
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
              All Doctors
            </h1>
            <p className="text-gray-600 text-lg">
              Manage and view all registered doctors
            </p>
          </div>
          <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-200">
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
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
            onClick={() => setSelectedDoctor(doctor)}
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            {/* Availability Badge */}
            <div className="absolute top-4 right-4 z-10">
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm transition-all duration-300 ${
                  doctor.available
                    ? "bg-green-500/90 text-white"
                    : "bg-gray-400/90 text-white"
                }`}
              >
                {doctor.available ? "Available" : "Unavailable"}
              </div>
            </div>

            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

            {/* Doctor Image Container */}
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 overflow-hidden">
              {/* Animated Background Circles */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-200/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

              {/* Doctor Image */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-xl relative z-10 transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="p-5 relative z-10">
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300 truncate">
                {doctor.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3 truncate">
                {doctor.speciality}
              </p>

              {/* Stats Row */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-semibold text-gray-700">
                    4.8
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-xs font-medium">
                    {Math.floor(Math.random() * 500) + 100}
                  </span>
                </div>
              </div>

              {/* View Details Button - Shows on Hover */}
              <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2.5 rounded-lg font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95">
                View Details
              </button>
            </div>

            {/* Click Ripple Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-blue-400 opacity-0 group-active:opacity-20 group-active:animate-ping"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {doctors.length === 0 && (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
            <svg
              className="w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No Doctors Found
          </h3>
          <p className="text-gray-500">
            There are no doctors registered in the system yet.
          </p>
        </div>
      )}

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default DoctorList;