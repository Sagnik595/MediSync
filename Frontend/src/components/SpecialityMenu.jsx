// import React from 'react'
// import { Link } from 'react-router-dom'
// import { specialityData } from '../assets/assets_frontend/assets.js'

// const SpecialityMenu = () => {
//   return (
//     <div className="flex flex-col items-center gap-6 py-16 px-4 text-center" id="speciality">
//       {/* Heading */}
//       <h1 className="text-3xl font-semibold text-gray-800">Find by Speciality</h1>

//       {/* Subtext */}
//       <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
//         Simply browse through our extensive list of trusted doctors, schedule
//         your appointment hassle-free.
//       </p>

//       {/* Speciality Cards */}
//       <ul className="flex flex-wrap justify-center gap-5 mt-4">
//         {specialityData.map((item, idx) => (
//           <li key={idx}>
//             <Link
//             onClick={()=>scrollTo(0,0)}
//               to={`/doctors/${item.speciality}`}
//               className="flex flex-col items-center gap-3 group"
//             >
//               {/* Icon Circle */}
//                 <img
//                   src={item.image}
//                   alt={item.speciality}
//                   className="w-25 h-25 rounded-full bg-blue-50 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md"
//                 />

//               {/* Label */}
//               <p className="text-sm text-gray-600 group-hover:text-[#5F6FFF] transition-colors duration-200">
//                 {item.speciality}
//               </p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default SpecialityMenu



import React from 'react'
import { Link } from 'react-router-dom'
import { specialityData } from '../assets/assets_frontend/assets.js'

const SpecialityMenu = () => {
  return (
    <div className="mt-10 flex flex-col items-center gap-5 py-10 px-4 text-center relative" id="speciality">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-100/30 rounded-full blur-3xl" />

      {/* Header Section */}
      <div className="relative z-10 space-y-4 max-w-2xl">
        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 text-blue-600 text-xs font-semibold animate-fadeIn">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
          Browse by Speciality
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 animate-slideUp">
          Find by{' '}
          <span className="bg-gradient-to-r from-[#5F6FFF] to-[#7C8AFF] bg-clip-text text-transparent">
            Speciality
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base text-gray-600 max-w-lg mx-auto leading-relaxed animate-slideUp animation-delay-200">
          Simply browse through our extensive list of trusted doctors and schedule
          your appointment hassle-free.
        </p>
      </div>

      {/* Speciality Cards Grid */}
      <ul className="grid grid-cols-5 lg:grid-cols-6 mt-1 w-full max-w-4xl relative z-5">
        {specialityData.map((item, idx) => (
          <li 
            key={idx}
            className="animate-fadeInUp"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <Link
              onClick={() => scrollTo(0, 0)}
              to={`/doctors/${item.speciality}`}
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white border-2 border-transparent hover:border-[#5F6FFF] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              {/* Icon Circle with Gradient Border */}
              <div className="relative">
                {/* Gradient Ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5F6FFF] to-[#7C8AFF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                
                {/* Image Container */}
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center overflow-hidden ring-4 ring-blue-50 group-hover:ring-[#5F6FFF]/20 transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.speciality}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Checkmark Badge */}
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-[#5F6FFF] to-[#7C8AFF] rounded-full border-3 border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Label */}
              <p className="text-sm font-semibold text-gray-700 group-hover:text-[#5F6FFF] transition-colors duration-300 text-center">
                {item.speciality}
              </p>

              {/* Hover Indicator */}
              <div className="w-0 group-hover:w-12 h-1 bg-gradient-to-r from-[#5F6FFF] to-[#7C8AFF] rounded-full transition-all duration-300" />
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  )
}

export default SpecialityMenu