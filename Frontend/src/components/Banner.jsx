import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div className='bg-[#5F6FFF] flex bg-primary rounded-lg px-10 sm:px-10 md:px-14 lg:px-12 md:mx-25'>

      {/* Left Side */}
      <div className='flex-1 sm:py-16 lg:py-24'>
        <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Book Appointment <br /> With 100+ Trusted Doctors
        </p>
        <button className='bg-white text-sm sm:text-base text-gray-600 px-5 py-2 rounded-full mt-6 hover:scale-105 transition-all duration-300 font-bold cursor-pointer'>
          Create account
        </button>
      </div>

      {/* Right Side */}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img
          className='w-full absolute bottom-0 h-auto max-h-[90%] object-contain'
          src={assets.appointment_img}
          alt='Appointment'
        />
      </div>

    </div>
  )
}

export default Banner;