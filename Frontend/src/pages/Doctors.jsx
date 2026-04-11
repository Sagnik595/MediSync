import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import {specialityData } from '../assets/assets_frontend/assets'
import { useContext } from 'react'
import { AppContext } from '../context/Context'

const Doctors = () => {
  const {doctors} = useContext(AppContext)
  const location = useLocation()
  const navigate = useNavigate()
  const { speciality: urlSpeciality } = useParams()

  const [selectedSpeciality, setSelectedSpeciality] = useState(urlSpeciality || null)

  // ✅ Sync state with URL
  useEffect(() => {
    setSelectedSpeciality(urlSpeciality || null)
  }, [urlSpeciality])

  const filteredDoctors = selectedSpeciality
    ? doctors.filter(item => item.speciality === selectedSpeciality)
    : doctors

  const handleSpecialityClick = (speciality) => {
    const newValue = selectedSpeciality === speciality ? null : speciality
    setSelectedSpeciality(newValue)

    // ✅ Update URL as well
    if (newValue) {
      navigate(`/doctors/${newValue}`)
    } else {
      navigate(`/doctors`)
    }
  }

  // ✅ Extract base route safely
  const [, base] = location.pathname.split("/")

  return (
    <>
      <Nav />

      <div className='mt-25 px-6 max-w-6xl mx-auto'>
        
        {/* Speciality Filters */}
        <ul className='flex flex-wrap gap-3 mb-8'>
          {specialityData.map((item) => (
            <li
              key={item.speciality}
              onClick={() => handleSpecialityClick(item.speciality)}
              className={`cursor-pointer px-4 py-2 rounded-full border text-sm transition-colors
                ${selectedSpeciality === item.speciality
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-gray-300 text-gray-600 hover:border-blue-400'}`}
            >
              {item.speciality}
            </li>
          ))}
        </ul>

        {/* Heading */}
        <h2 className='text-2xl font-medium text-gray-800 mb-6'>
          {selectedSpeciality || 'All Doctors'}
        </h2>

        {/* Doctors Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {filteredDoctors.map((item) => {
            const redirecting =
              base === "doctors"
                ? `/doctors/${item.speciality}/appointments/${item._id}`
                : `/appointments/${item._id}`

            return (
              <Link
                to={redirecting}
                key={item._id}
                className='bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-[0_0_17px_1px] hover:shadow-black hover:scale-105 transition-all duration-700 cursor-pointer'
              >
                <div className='bg-blue-50 flex items-center justify-center h-48'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='h-full w-full object-cover object-top'
                  />
                </div>

                <div className='p-4'>
                  <div className='flex items-center gap-2 mb-1'>
                    <span className='w-2 h-2 rounded-full bg-green-500 inline-block'></span>
                    <span className='text-green-600 text-xs font-medium'>Available</span>
                  </div>

                  <h3 className='text-gray-900 font-medium text-base'>{item.name}</h3>
                  <p className='text-gray-500 text-sm mt-0.5'>{item.speciality}</p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <p className='text-gray-400 text-center py-16'>
            No doctors found for this speciality.
          </p>
        )}
      </div>

      <Footer />
    </>
  )
}

export default Doctors