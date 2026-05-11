// import React from 'react'
// import { assets } from '../assets/assets_frontend/assets'

// const Banner = () => {
//   return (
//     <div className='bg-[#5F6FFF] flex bg-primary rounded-lg px-10 sm:px-10 md:px-14 lg:px-12 md:mx-25'>

//       {/* Left Side */}
//       <div className='flex-1 sm:py-16 lg:py-24'>
//         <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
//           Book Appointment <br /> With 100+ Trusted Doctors
//         </p>
//         <button className='bg-white text-sm sm:text-base text-gray-600 px-5 py-2 rounded-full mt-6 hover:scale-105 transition-all duration-300 font-bold cursor-pointer'>
//           Create account
//         </button>
//       </div>

//       {/* Right Side */}
//       <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
//         <img
//           className='w-full absolute bottom-0 h-auto max-h-[90%] object-contain'
//           src={assets.appointment_img}
//           alt='Appointment'
//         />
//       </div>

//     </div>
//   )
// }

// export default Banner;



import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div className='mt-25 relative bg-gradient-to-br from-[#5F6FFF] via-[#7380FF] to-[#6875FF] rounded-3xl px-8 sm:px-12 md:px-16 lg:px-16 md:mx-25 overflow-hidden shadow-2xl shadow-blue-500/30'>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative flex items-center">
        {/* Left Side */}
        <div className='flex-1 py-12 sm:py-16 lg:py-24 z-10'>
          {/* Stats Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fadeInUp">

            <span className="text-white/90 text-xl font-semibold">MediSync</span>
          </div>

          {/* Main Heading */}
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight md:leading-tight lg:leading-tight mb-4 animate-fadeInUp animation-delay-200'>
            Book Appointment
            <br />
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              With 100+ Trusted Doctors
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-white/80 text-sm md:text-base max-w-md mb-8 leading-relaxed animate-fadeInUp animation-delay-400">
            Join thousands of satisfied patients who trust our healthcare professionals for their medical needs.
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 mt-8 animate-fadeInUp animation-delay-800">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-white">
                <div className="text-xs opacity-80">Rating</div>
                <div className="text-sm font-bold">4.9/5</div>
              </div>
            </div>

            <div className="h-10 w-px bg-white/20" />

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-white">
                <div className="text-xs opacity-80">Verified</div>
                <div className="text-sm font-bold">100%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className='hidden md:block md:w-1/2 lg:w-[420px] relative'>
          {/* Glow Effect */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-1/2 bg-gradient-to-t from-white/20 to-transparent rounded-full blur-3xl" />
          
          <img
            className='relative w-full bottom-0 h-auto max-h-[90%] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 animate-floatIn'
            src={assets.appointment_img}
            alt='Appointment'
          />
        </div>
      </div>

      <style jsx>{`
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

        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-floatIn {
          animation: floatIn 1s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default Banner;