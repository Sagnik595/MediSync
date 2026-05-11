import React from 'react'
import { Link } from 'react-router-dom'
import { specialityData } from '../assets/assets_frontend/assets.js'

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-5 py-20 px-4 text-center relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #1a73e8 0%, #0d47a1 55%, #0a2e6e 100%)',
      }}
    >
      {/* Spotlight overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 35%),
            radial-gradient(circle at 80% 25%, rgba(147,197,253,0.08), transparent 40%),
            radial-gradient(circle at 70% 80%, rgba(255,255,255,0.05), transparent 45%)
          `,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Animated Background Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-10 animate-pulse"
        style={{
          background: 'radial-gradient(circle, #60a5fa, transparent 70%)',
          animationDuration: '4s',
        }}
      />
      <div
        className="absolute -bottom-24 right-1/3 w-80 h-80 rounded-full opacity-10 animate-float"
        style={{
          background: 'radial-gradient(circle, #93c5fd, transparent 70%)',
        }}
      />
      <div
        className="absolute top-1/2 -right-16 w-64 h-64 rounded-full opacity-[0.07] animate-floatReverse"
        style={{
          background: 'radial-gradient(circle, #bfdbfe, transparent 70%)',
        }}
      />

      {/* Floating Particle Dots */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/20 animate-floatDot"
          style={{
            width: `${4 + (i % 4) * 3}px`,
            height: `${4 + (i % 4) * 3}px`,
            top: `${10 + i * 11}%`,
            left: `${5 + i * 10}%`,
            animationDuration: `${3 + i * 0.6}s`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      {/* Header Section */}
      <div className="relative z-10 space-y-5 max-w-2xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-full px-4 py-2 text-blue-100 text-xs font-semibold animate-fadeIn">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
          </svg>
          Browse by Speciality
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight animate-slideUp">
          Find by{' '}
          <span className="bg-linear-to-r from-blue-200 via-cyan-100 to-white bg-clip-text text-transparent animate-gradient">
            Speciality
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base text-blue-100/90 max-w-lg mx-auto leading-relaxed animate-slideUp animation-delay-200">
          Simply browse through our extensive list of trusted doctors and schedule
          your appointment hassle-free.
        </p>
      </div>

      {/* Speciality Grid */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-8 w-full max-w-6xl relative z-10">
        {specialityData.map((item, idx) => (
          <li
            key={idx}
            className="animate-fadeInUp"
            style={{ animationDelay: `${idx * 0.08}s` }}
          >
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              to={`/doctors/${item.speciality}`}
              className="group relative flex flex-col items-center gap-4 p-6 rounded-3xl
                         bg-white/10 backdrop-blur-2xl border border-white/20
                         shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                         hover:bg-white/15
                         hover:border-white/30
                         hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                         hover:-translate-y-3 hover:scale-[1.02]
                         transition-all duration-500 overflow-hidden"
            >
              {/* Shine Sweep */}
              <div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                           bg-linear-to-r from-transparent via-white/20 to-transparent
                           transition-transform duration-1000 skew-x-12"
              />

              {/* Image */}
              <div className="relative z-10">
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 blur-xl scale-125 transition-all duration-500" />

                {/* Ring */}
                <div className="relative w-24 h-24 rounded-full p-0.75 bg-linear-to-br from-blue-200 via-cyan-100 to-white">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.speciality}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Check Badge */}
                <div
                  className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full
                             bg-linear-to-br from-blue-500 to-cyan-400
                             border-[3px] border-white
                             flex items-center justify-center
                             opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
                             transition-all duration-300 shadow-lg"
                >
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Label */}
              <div className="relative z-10 space-y-2">
                <p className="text-sm font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300">
                  {item.speciality}
                </p>

                <div className="mx-auto h-1 w-0 group-hover:w-12 rounded-full bg-linear-to-r from-blue-200 to-cyan-100 transition-all duration-500" />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Custom Animations */}
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
            transform: translateY(24px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-18px);
          }
        }

        @keyframes floatReverse {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(18px);
          }
        }

        @keyframes floatDot {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-10px) scale(1.2);
            opacity: 0.45;
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

        .animate-slideUp {
          animation: slideUp 0.7s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 7s ease-in-out infinite;
        }

        .animate-floatReverse {
          animation: floatReverse 5s ease-in-out infinite;
        }

        .animate-floatDot {
          animation-name: floatDot;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradientShift 4s linear infinite alternate;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  )
}

export default SpecialityMenu