import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Context'


const TopDoctors = () => {
  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)

  return (
    <div className="flex flex-col items-center gap-6 py-16 px-4 md:px-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Top Doctors to Book</h1>
        <p className="text-sm text-gray-500 mt-2 max-w-sm mx-auto leading-relaxed">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 w-full mt-4">
        {doctors.slice(0, 10).map((item) => (
          <div
            key={item._id}
            onClick={() => {
              scrollTo(0,0)
              navigate(`/doctors/${item.speciality}/appointments/${item._id}`)
              
          }}
            className="group flex flex-col rounded-2xl border border-blue-100 overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-white"
          >
            {/* Doctor Image */}
            <div className="bg-blue-50 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Info */}
            <div className="p-3 flex flex-col gap-1">
              {/* Available badge */}
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                <span className="text-xs text-green-500 font-medium">Available</span>
              </div>

              {/* Name */}
              <p className="text-sm font-semibold text-gray-800 leading-snug">
                {item.name}
              </p>

              {/* Speciality */}
              <p className="text-xs text-gray-500">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <button
        onClick={() => {
          scrollTo(0,0)
          navigate('/doctors')}}
        className="mt-4 px-10 py-3 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
      >
        More
      </button>
    </div>
  )
}

export default TopDoctors