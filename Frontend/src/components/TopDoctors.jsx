// import React, { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/Context'


// const TopDoctors = () => {
//   const navigate = useNavigate()
//   const {doctors} = useContext(AppContext)

//   return (
//     <div className="flex flex-col items-center gap-6 py-16 px-4 md:px-10">
//       {/* Header */}
//       <div className="text-center">
//         <h1 className="text-3xl font-semibold text-gray-800">Top Doctors to Book</h1>
//         <p className="text-sm text-gray-500 mt-2 max-w-sm mx-auto leading-relaxed">
//           Simply browse through our extensive list of trusted doctors.
//         </p>
//       </div>

//       {/* Doctor Cards Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 w-full mt-4">
//         {doctors.slice(0, 10).map((item) => (
//           <div
//             key={item._id}
//             onClick={() => {
//               scrollTo(0,0)
//               navigate(`/doctors/${item.speciality}/appointments/${item._id}`)
              
//           }}
//             className="group flex flex-col rounded-2xl border border-blue-100 overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-white"
//           >
//             {/* Doctor Image */}
//             <div className="bg-blue-50 w-full overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
//               />
//             </div>

//             {/* Info */}
//             <div className="p-3 flex flex-col gap-1">
//               {/* Available badge */}
//               <div className="flex items-center gap-1.5">
//                 <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
//                 <span className="text-xs text-green-500 font-medium">Available</span>
//               </div>

//               {/* Name */}
//               <p className="text-sm font-semibold text-gray-800 leading-snug">
//                 {item.name}
//               </p>

//               {/* Speciality */}
//               <p className="text-xs text-gray-500">{item.speciality}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* More Button */}
//       <button
//         onClick={() => {
//           scrollTo(0,0)
//           navigate('/doctors')}}
//         className="mt-4 px-10 py-3 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
//       >
//         More
//       </button>
//     </div>
//   )
// }

// export default TopDoctors



import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Context'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className="flex flex-col items-center gap-10 py-5 px-4 md:px-10 relative bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-purple-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-100/40 rounded-full blur-3xl" />

      {/* Header Section */}
      <div className="text-center relative z-10 space-y-4 max-w-2xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full px-4 py-2 text-[#5F6FFF] text-xs font-semibold animate-fadeIn">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          Featured Professionals
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 animate-slideUp">
          Top Doctors to{' '}
          <span className="bg-gradient-to-r from-[#5F6FFF] to-[#7C8AFF] bg-clip-text text-transparent">
            Book
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base text-gray-600 max-w-lg mx-auto leading-relaxed animate-slideUp animation-delay-200">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 w-8xl max-w-7xl mt-4 relative z-10">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={item._id}
            onClick={() => {
              scrollTo(0, 0)
              navigate(`/doctors/${item.speciality}/appointments/${item._id}`)
            }}
            className="group flex flex-col rounded-3xl border-2 border-gray-100 overflow-hidden cursor-pointer hover:border-[#5F6FFF] hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 bg-white animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Doctor Image Container */}
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 w-full aspect-square overflow-hidden">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#5F6FFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Info Section */}
            <div className="p-4 flex flex-col gap-2.5 relative">
              {/* Decorative Top Border */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-20 h-1 bg-gradient-to-r from-[#5F6FFF] to-[#7C8AFF] rounded-full transition-all duration-500" />

              {/* Available Badge */}
              <div className="flex items-center gap-2 mt-1">
                <div className="relative">
                  <span className="absolute w-2 h-2 rounded-full bg-green-400 animate-ping" />
                  <span className="relative w-2 h-2 rounded-full bg-green-500 block" />
                </div>
                <span className="text-xs text-green-600 font-semibold tracking-wide">AVAILABLE</span>
              </div>

              {/* Name */}
              <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#5F6FFF] transition-colors duration-300">
                {item.name}
              </h3>

              {/* Speciality with Icon */}
              <div className="flex items-center gap-2 text-gray-500">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L11 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c-.25.78.128 1.623.884 1.954.108.047.22.088.33.128H5v-4.634zM6.5 16h7l.001.004v.996H6.5v-1zm8.5-.004c.11-.04.222-.081.33-.128.756-.331 1.134-1.174.884-1.954L15.5 11.5V16h-.5z" clipRule="evenodd" />
                </svg>
                <p className="text-sm truncate">{item.speciality}</p>
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* CTA Button - Appears on Hover */}
              <button className="mt-2 w-full py-2.5 bg-gradient-to-r from-[#5F6FFF] to-[#7C8AFF] text-white text-sm font-semibold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <button
        onClick={() => {
          scrollTo(0, 0)
          navigate('/doctors')
        }}
        className="group relative mt-8 px-12 py-4 rounded-full border-2 border-gray-200 text-gray-700 text-base font-semibold hover:border-[#5F6FFF] hover:text-[#5F6FFF] transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-500/10 animate-fadeIn animation-delay-500"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="relative flex items-center gap-3">
          View All Doctors
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </button>

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

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  )
}

export default TopDoctors