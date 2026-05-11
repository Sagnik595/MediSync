// import React, { useState, useEffect } from "react";
// import Nav from "../components/Nav";
// import Footer from "../components/Footer";
// import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
// import { specialityData } from "../assets/assets_frontend/assets";
// import { useContext } from "react";
// import { AppContext } from "../context/Context";

// const Doctors = () => {
//   const { doctors } = useContext(AppContext);
//   console.log(doctors);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const { speciality: urlSpeciality } = useParams();

//   const [selectedSpeciality, setSelectedSpeciality] = useState(
//     urlSpeciality || null,
//   );

//   // ✅ Sync state with URL
//   useEffect(() => {
//     setSelectedSpeciality(urlSpeciality || null);
//   }, [urlSpeciality]);

//   const filteredDoctors = selectedSpeciality
//     ? doctors.filter((item) => item.speciality === selectedSpeciality)
//     : doctors;

//   const handleSpecialityClick = (speciality) => {
//     const newValue = selectedSpeciality === speciality ? null : speciality;
//     setSelectedSpeciality(newValue);

//     // ✅ Update URL as well
//     if (newValue) {
//       navigate(`/doctors/${newValue}`);
//     } else {
//       navigate(`/doctors`);
//     }
//   };

//   // ✅ Extract base route safely
//   const [, base] = location.pathname.split("/");

//   return (
//     <>
//       <Nav />

//       <div className="mt-35 px-6 max-w-6xl mx-auto mb-30">
//         {/* Speciality Filters */}
//         <ul className="flex flex-wrap gap-3 mb-8">
//           {specialityData.map((item) => (
//             <li
//               key={item.speciality}
//               onClick={() => handleSpecialityClick(item.speciality)}
//               className={`cursor-pointer px-4 py-2 rounded-full border text-sm transition-colors
//                 ${
//                   selectedSpeciality === item.speciality
//                     ? "bg-blue-600 text-white border-blue-600"
//                     : "border-gray-300 text-gray-600 hover:border-blue-400"
//                 }`}
//             >
//               {item.speciality}
//             </li>
//           ))}
//         </ul>

//         {/* Heading */}
//         <h2 className="text-2xl font-medium text-gray-800 mb-6">
//           {selectedSpeciality || "All Doctors"}
//         </h2>

//         {/* Doctors Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//           {filteredDoctors.map((item) => {
//             const redirecting =
//               base === "doctors"
//                 ? `/doctors/${item.speciality}/appointments/${item._id}`
//                 : `/appointments/${item._id}`;

//             return (
//               <Link
//                 to={item.available ? redirecting : "#"}
//                 key={item._id}
//                 onClick={(e) => {
//                   if (!item.available) e.preventDefault();
//                 }}
//                 className={`bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-700 ${item.available? "hover:shadow-[0_0_17px_1px] hover:shadow-black hover:scale-105 cursor-pointer": "opacity-50 cursor-not-allowed pointer-events-auto"}`}
//               >
//                 <div className="bg-blue-50 flex items-center justify-center h-48">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="h-full w-full object-cover object-top"
//                   />
//                 </div>

//                 <div className="p-4">
//                   {/* Availability */}
//                   <div className="flex items-center gap-2 mb-1">
//                     <span
//                       className={`w-2 h-2 rounded-full inline-block ${
//                         item.available ? "bg-green-500" : "bg-red-500"
//                       }`}
//                     ></span>

//                     <span
//                       className={`text-xs font-medium ${
//                         item.available ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       {item.available ? "Available" : "Not Available"}
//                     </span>
//                   </div>

//                   {/* Name + Speciality */}
//                   <h3 className="text-gray-900 font-medium text-base">
//                     {item.name}
//                   </h3>
//                   <p className="text-gray-500 text-sm mt-0.5">
//                     {item.speciality}
//                   </p>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>

//         {/* No Results */}
//         {filteredDoctors.length === 0 && (
//           <p className="text-gray-400 text-center py-16">
//             No doctors found for this speciality.
//           </p>
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Doctors;

import React, { useState, useEffect, useContext } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { specialityData } from "../assets/assets_frontend/assets";
import { AppContext } from "../context/Context";

const Doctors = () => {
  const { doctors } = useContext(AppContext);

  const location = useLocation();
  const navigate = useNavigate();
  const { speciality: urlSpeciality } = useParams();

  const [selectedSpeciality, setSelectedSpeciality] = useState(
    urlSpeciality || null
  );

  useEffect(() => {
    setSelectedSpeciality(urlSpeciality || null);
  }, [urlSpeciality]);

  const filteredDoctors = selectedSpeciality
    ? doctors.filter((item) => item.speciality === selectedSpeciality)
    : doctors;

  const handleSpecialityClick = (speciality) => {
    const newValue = selectedSpeciality === speciality ? null : speciality;
    setSelectedSpeciality(newValue);

    if (newValue) {
      navigate(`/doctors/${newValue}`);
    } else {
      navigate("/doctors");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [, base] = location.pathname.split("/");

  return (
    <>
      <Nav />

      <div className="relative pt-22 pb-28 min-h-screen overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100/60">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-0 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-0 w-md h-112 bg-indigo-400/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-120 h-120 bg-cyan-300/10 rounded-full blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-blue-100 text-xs font-semibold tracking-wider uppercase text-blue-600 shadow-sm">
              Find Your Specialist
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              {selectedSpeciality || "All Doctors"}
            </h1>

            <p className="mt-4 max-w-2xl text-gray-600 leading-relaxed">
              Connect with experienced and verified doctors across multiple
              specialities and book your appointment effortlessly.
            </p>
          </div>

          {/* Speciality Filters */}
          <div className="mb-12 overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 min-w-max pb-2">
              {specialityData.map((item) => {
                const active =
                  selectedSpeciality === item.speciality;

                return (
                  <button
                    key={item.speciality}
                    onClick={() =>
                      handleSpecialityClick(item.speciality)
                    }
                    className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap border backdrop-blur-md transition-all duration-300 ${
                      active
                        ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200"
                        : "bg-white/80 text-gray-600 border-white/70 hover:bg-white hover:border-blue-200 hover:text-blue-600"
                    }`}
                  >
                    {item.speciality}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Doctors Grid */}
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {filteredDoctors.map((item) => {
                const redirecting =
                  base === "doctors"
                    ? `/doctors/${item.speciality}/appointments/${item._id}`
                    : `/appointments/${item._id}`;

                return (
                  <Link
                    key={item._id}
                    to={item.available ? redirecting : "#"}
                    onClick={(e) => {
                      if (!item.available) e.preventDefault();
                      else
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                    }}
                    className={`group rounded-3xl overflow-hidden border border-white/70 bg-white/85 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition-all duration-500 ${
                      item.available
                        ? "hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]"
                        : "opacity-60 cursor-not-allowed"
                    }`}
                  >
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-linear-to-br from-blue-50 to-indigo-50">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />

                      <span
                        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md border ${
                          item.available
                            ? "bg-emerald-50/90 text-emerald-600 border-emerald-100"
                            : "bg-red-50/90 text-red-600 border-red-100"
                        }`}
                      >
                        {item.available ? "Available" : "Unavailable"}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {item.speciality}
                      </p>

                      {item.available && (
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-sm font-medium text-blue-600">
                            Book Appointment
                          </span>

                          <svg
                            className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="py-24 text-center">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">
                No doctors found
              </h3>
              <p className="text-gray-500">
                Try selecting a different speciality.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Doctors;