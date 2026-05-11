import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Context'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className="flex flex-col items-center gap-10 py-0 px-4 md:px-10 pt-10 pb-10 relative bg-linear-to-br from-[#1a73e8] via-[#0d47a1] to-[#0a2e6e] overflow-hidden">
      {/* Cursor-like Spotlight Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(147,197,253,0.08),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(191,219,254,0.06),transparent_40%)] pointer-events-none" />

      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-20 right-1/4 w-md h-112 bg-indigo-300/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/3 w-120 h-120 bg-sky-300/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

      {/* Decorative Floating Glows */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-200/10 rounded-full blur-3xl animate-float-delayed" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Header Section */}
      <div className="text-center relative z-10 space-y-4 max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-blue-100 text-xs font-semibold animate-fadeIn shadow-sm backdrop-blur-md">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          Featured Professionals
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white animate-slideUp">
          Top Doctors to{' '}
          <span className="bg-linear-to-r from-blue-200 via-white to-cyan-200 bg-clip-text text-transparent bg-size-[200%_auto] animate-gradientShift">
            Book
          </span>
        </h1>

        <p className="text-base text-blue-100/80 max-w-lg mx-auto leading-relaxed animate-slideUp animation-delay-200">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 w-full max-w-7xl mt-4 relative z-10">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={item._id}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
              navigate(`/doctors/${item.speciality}/appointments/${item._id}`)
            }}
            className="group relative flex flex-col rounded-3xl border border-white/10 overflow-hidden cursor-pointer bg-white/95 backdrop-blur-xl hover:border-blue-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-500 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#5F6FFF]/0 via-[#5F6FFF]/10 to-[#7C8AFF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 pointer-events-none z-20" />

            <div className="relative bg-linear-to-br from-blue-50 to-purple-50 w-full aspect-square overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-t from-[#5F6FFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-[10px] font-semibold text-[#5F6FFF] shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                {item.speciality}
              </div>
            </div>

            <div className="p-4 flex flex-col gap-2.5 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-20 h-1 bg-linear-to-r from-[#5F6FFF] to-[#7C8AFF] rounded-full transition-all duration-500" />

              <div className="flex items-center gap-2 mt-1">
                <div className="relative">
                  <span className="absolute w-2 h-2 rounded-full bg-green-400 animate-ping" />
                  <span className="relative w-2 h-2 rounded-full bg-green-500 block" />
                </div>
                <span className="text-xs text-green-600 font-semibold tracking-wide">
                  AVAILABLE
                </span>
              </div>

              <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#5F6FFF] transition-colors duration-300">
                {item.name}
              </h3>

              <div className="flex items-center gap-2 text-gray-500">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L11 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c-.25.78.128 1.623.884 1.954.108.047.22.088.33.128H5v-4.634zM6.5 16h7l.001.004v.996H6.5v-1zm8.5-.004c.11-.04.222-.081.33-.128.756-.331 1.134-1.174.884-1.954L15.5 11.5V16h-.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm truncate">{item.speciality}</p>
              </div>

              <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 40}ms` }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <button className="mt-2 w-full py-2.5 bg-linear-to-r from-[#5F6FFF] to-[#7C8AFF] text-white text-sm font-semibold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          navigate('/doctors')
        }}
        className="cursor-pointer group relative mt-8 px-12 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-base font-semibold hover:bg-white hover:text-[#1a73e8] transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-900/20 animate-fadeIn animation-delay-500"
      >
        <span 
        className="relative flex items-center gap-3">
          View All Doctors
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
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
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -20px) scale(1.08);
          }
          50% {
            transform: translate(-20px, 30px) scale(0.95);
          }
          75% {
            transform: translate(20px, 15px) scale(1.05);
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

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-gradientShift {
          animation: gradientShift 4s linear infinite alternate;
        }

        .animate-blob {
          animation: blob 14s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

export default TopDoctors