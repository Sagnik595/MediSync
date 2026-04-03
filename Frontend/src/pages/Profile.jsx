import React, { useState } from 'react'
import Nav from '../components/Nav'
import { assets } from '../assets/assets_frontend/assets'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Edward Vincent',
    avatar: `${assets.profile_pic}`,
    contacts: [
      { label: 'Email id', value: 'richardjameswap@gmail.com', type: 'email' },
      { label: 'Phone', value: '+1 123 456 7890', type: 'phone' },
      { label: 'Address', value: '57th Cross, Richmond Circle, Church Road, London', type: 'text' },
    ],
    basic: [
      { label: 'Gender', value: 'Male' },
      { label: 'Birthday', value: '20 July, 2024' },
    ],
  })

  const handleContactChange = (index, newValue) => {
    const updated = [...profile.contacts]
    updated[index] = { ...updated[index], value: newValue }
    setProfile({ ...profile, contacts: updated })
  }

  const handleBasicChange = (index, newValue) => {
    const updated = [...profile.basic]
    updated[index] = { ...updated[index], value: newValue }
    setProfile({ ...profile, basic: updated })
  }

  return (
    <>
      <Nav />
      <div className="mt-25 min-h-screen bg-white px-10 py-10 flex gap-10 items-start">

        <div className="flex-1 max-w-lg">

          {/* Avatar + Name */}
          <div className="flex items-center gap-4 mb-6 border-b border-gray-200 pb-5">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-16 h-16 rounded-full object-cover shadow"
            />
            <div>
              {isEditing
                ? <input
                    className="text-2xl font-bold text-gray-800 border-b border-indigo-400 outline-none bg-transparent"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  />
                : <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
              }
            </div>
          </div>

          {/* Contact Information */}
          <p className="text-xs font-semibold text-gray-400 underline tracking-widest uppercase mb-4">
            Contact Information
          </p>
          <div className="space-y-3 mb-8">
            {profile.contacts.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="text-sm text-gray-500 w-20 shrink-0">{item.label}</span>
                {isEditing
                  ? <input
                      className="text-sm text-gray-800 flex-1 border-b border-indigo-300 outline-none bg-transparent"
                      value={item.value}
                      onChange={(e) => handleContactChange(i, e.target.value)}
                    />
                  : <span className={`text-sm ${item.type !== 'text' ? 'text-blue-500' : 'text-gray-700'}`}>
                      {item.value}
                    </span>
                }
              </div>
            ))}
          </div>

          {/* Basic Information */}
          <p className="text-xs font-semibold text-gray-400 underline tracking-widest uppercase mb-4">
            Basic Information
          </p>
          <div className="space-y-3 mb-10">
            {profile.basic.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="text-sm text-gray-500 w-20 shrink-0">{item.label}</span>
                {isEditing
                  ? <input
                      className="text-sm text-gray-800 flex-1 border-b border-indigo-300 outline-none bg-transparent"
                      value={item.value}
                      onChange={(e) => handleBasicChange(i, e.target.value)}
                    />
                  : <span className="text-sm text-gray-700">{item.value}</span>
                }
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-6 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-6 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
            >
              Save information
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile