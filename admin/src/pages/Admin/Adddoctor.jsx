import React, { useContext, useState } from "react";
import {AdminContext} from '../../context/AdminContext'
import { toast } from "react-toastify";

const Adddoctor = () => {
  const [docImg, setDocImg] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    experience: "1 Year",
    fees: "",
    specialty: "General physician",
    education: "",
    address1: "",
    address2: "",
    about: "",
  });

  const {backendurl,aToken} = useContext(AdminContext)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDocImg(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if(!docImg)
        return toast.error("Image not uploaded!!")
    } catch (error) {
      
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl bg-white rounded-lg border border-gray-200 p-5">
        <form onSubmit={handleSubmit}>
          {/* Upload Image */}
          <div className="mb-3">
            <label className="inline-block cursor-pointer">
              <div className="flex items-center gap-3">
                {docImg ? (
                  <img
                    src={docImg}
                    alt="Doctor"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-600">Upload doctor</p>
                  <p className="text-sm text-gray-600">picture</p>
                </div>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {/* Left Column */}
            <div>
              <label className="block text-xs text-gray-700 mb-2">
                Doctor name
              </label>
              <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            {/* Right Column */}
            <div>
              <label className="block text-xs text-gray-700 mb-2">
                Speciality
              </label>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-600 focus:outline-none focus:border-gray-400 appearance-none bg-white"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                  backgroundPosition: "right 0.5rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "2.5rem",
                }}
              >
                <option>General physician</option>
                <option>Gynecologist</option>
                <option>Dermatologist</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-gray-700 mb-2">
                Doctor Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-gray-700 mb-2">
                Education
              </label>
              <input
                name="education"
                placeholder="Education"
                value={formData.education}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-gray-700 mb-2">
                Doctor Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-gray-700 mb-2">
                Address
              </label>
              <input
                name="address1"
                placeholder="Address 1"
                value={formData.address1}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-gray-700 mb-2">
                Experience
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-600 focus:outline-none focus:border-gray-400 appearance-none bg-white"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                  backgroundPosition: "right 0.5rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "2.5rem",
                }}
              >
                <option>1 Year</option>
                <option>2 Years</option>
                <option>3 Years</option>
                <option>4 Years</option>
                <option>5 Years</option>
                <option>6 Years</option>
                <option>7 Years</option>
                <option>8 Years</option>
                <option>9 Years</option>
                <option>10+ Years</option>
              </select>
            </div>

            <div>
              <input
                name="address2"
                placeholder="Address 2"
                value={formData.address2}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400 mt-6"
              />
            </div>

            <div className="col-span-2 flex gap-6 items-start">
              {/* Fees */}
              <div className="w-1/3">
                <label className="block text-xs text-gray-700 mb-2">Fees</label>
                <input
                  name="fees"
                  placeholder="Your fees"
                  value={formData.fees}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  required
                />
              </div>

              {/* About */}
              <div className="w-2/3">
                <label className="block text-xs text-gray-700 mb-2">
                  About me
                </label>
                <textarea
                  name="about"
                  placeholder="write about yourself"
                  value={formData.about}
                  onChange={handleInputChange}
                  rows="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-6 px-8 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-full transition-colors"
          >
            Add doctor
          </button>
        </form>
      </div>
    </div>
  );
};

export default Adddoctor;
