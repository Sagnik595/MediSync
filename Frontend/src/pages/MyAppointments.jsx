import React, { useContext } from 'react'
import { AppContext } from '../context/Context'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext)

  return (
    <>
      <Nav />
      <div className='px-10 mt-25 mb-16'>
        <h2 className='text-lg font-medium text-gray-700 mb-4 pb-2 border-b border-gray-200'>
          My Appointments
        </h2>

        <div className='divide-y divide-gray-200'>
          {doctors.slice(0, 2).map((item, idx) => (
            <div key={idx} className='flex items-start gap-6 py-6'>

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className='w-28 h-28 rounded-lg object-cover bg-indigo-50'
              />

              {/* Info */}
              <div className='flex-1'>
                <p className='text-base font-semibold text-gray-800'>{item.name}</p>
                <p className='text-sm text-gray-500 mb-3'>{item.speciality}</p>

                <p className='text-sm font-medium text-gray-700'>Address:</p>
                <p className='text-sm text-gray-500'>{item.address.line1}</p>
                <p className='text-sm text-gray-500'>{item.address.line2}</p>

                <p className='text-sm text-gray-500 mt-2'>
                  <span className='font-medium text-gray-700'>Date & Time:</span> 25 July, 2024 | 8:30 PM
                </p>
              </div>

              {/* Buttons */}
              <div className='flex flex-col gap-2 min-w-[160px]'>
                <button className='w-40 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm rounded transition-all'>
                  Pay here
                </button>
                <button className='w-40 py-2 border border-gray-300 text-sm text-gray-600 rounded hover:bg-gray-50 transition-all'>
                  Cancel appointment
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MyAppointments