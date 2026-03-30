import React from 'react'
import { Link } from 'react-router-dom'
import { specialityData } from '../assets/assets_frontend/assets.js'

const SpecialityMenu = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-16 px-4 text-center" id="speciality">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-gray-800">Find by Speciality</h1>

      {/* Subtext */}
      <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>

      {/* Speciality Cards */}
      <ul className="flex flex-wrap justify-center gap-8 mt-6">
        {specialityData.map((item, idx) => (
          <li key={idx}>
            <Link
            onClick={()=>scrollTo(0,0)}
              to={`/doctors?speciality=${encodeURIComponent(item.speciality)}`}
              className="flex flex-col items-center gap-3 group"
            >
              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                <img
                  src={item.image}
                  alt={item.speciality}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Label */}
              <p className="text-sm text-gray-600 group-hover:text-[#5F6FFF] transition-colors duration-200">
                {item.speciality}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SpecialityMenu