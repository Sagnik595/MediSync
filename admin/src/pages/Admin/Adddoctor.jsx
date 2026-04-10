import React, { useContext, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

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

  const { backendurl, aToken } = useContext(AdminContext);

  console.log(backendurl);
  console.log(aToken);
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDocImg(file);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Image not uploaded!");
      }

      const formDataToSend = new FormData();

      formDataToSend.append("image", docImg);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("experience", formData.experience);
      formDataToSend.append("fees", Number(formData.fees));
      formDataToSend.append("about", formData.about);


      formDataToSend.append("speciality", formData.specialty);
      formDataToSend.append("degree", formData.education);

      formDataToSend.append(
        "address",
        JSON.stringify({
          line1: formData.address1,
          line2: formData.address2,
        })
      );

      const { data } = await axios.post(
        `${backendurl}api/admin/addDoctor`,
        formDataToSend,
        {
          headers: {
            token: aToken,
          },
        }
      );

      if (data.success) {
        toast.success(data.message);

        setDocImg(null);
        setFormData({
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
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
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
                    src={URL.createObjectURL(docImg)}
                    alt="Doctor"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400">+</span>
                  </div>
                )}
                <p className="text-sm text-gray-600">
                  Upload doctor picture
                </p>
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
          <div className="grid grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Doctor Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="border p-2 rounded"
            />

            <select
              name="specialty"
              value={formData.specialty}
              onChange={handleInputChange}
              className="border p-2 rounded"
            >
              <option>General physician</option>
              <option>Gynecologist</option>
              <option>Dermatologist</option>
              <option>Pediatrician</option>
              <option>Neurologist</option>
              <option>Gastroenterologist</option>
            </select>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="border p-2 rounded"
            />

            <input
              name="education"
              placeholder="Degree"
              value={formData.education}
              onChange={handleInputChange}
              required
              className="border p-2 rounded"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="border p-2 rounded"
            />

            <input
              name="address1"
              placeholder="Address Line 1"
              value={formData.address1}
              onChange={handleInputChange}
              required
              className="border p-2 rounded"
            />

            <select
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="border p-2 rounded"
            >
              <option>1 Year</option>
              <option>2 Years</option>
              <option>3 Years</option>
              <option>4 Years</option>
              <option>5 Years</option>
              <option>10+ Years</option>
            </select>

            <input
              name="address2"
              placeholder="Address Line 2"
              value={formData.address2}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />

            <input
              name="fees"
              placeholder="Fees"
              value={formData.fees}
              onChange={handleInputChange}
              required
              className="border p-2 rounded"
            />

            <textarea
              name="about"
              placeholder="About doctor"
              value={formData.about}
              onChange={handleInputChange}
              className="border p-2 rounded col-span-2"
            />
          </div>

          <button
            type="submit"
            className="mt-5 px-6 py-2 bg-indigo-600 text-white rounded"
          >
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
};

export default Adddoctor;