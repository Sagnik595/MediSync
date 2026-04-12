import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import { assets } from "../assets/assets_frontend/assets";
import { AppContext } from "../context/Context";
import { toast } from "react-toastify";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(null);

  const { userdata, setuserdata, loaduserprofiledata } = useContext(AppContext);

  // 🔥 Save handler (API + image upload)
  const handleSave = async () => {
    try {
      const formData = new FormData();

      formData.append("name", userdata.name);
      formData.append("phone", userdata.phone);
      formData.append("dob", userdata.dob);
      formData.append("gender", userdata.gender);

      formData.append(
        "address",
        JSON.stringify({
          line1: "",
          line2: "",
        })
      );

      // 🔥 image upload
      if (image) {
        formData.append("image", image);
      }

      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/editprofile`,
        {
          method: "POST",
          headers: {
            token: localStorage.getItem("token"),
          },
          body: formData,
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Profile updated");
        setIsEditing(false);
        setImage(null);

        // 🔥 reload latest data from backend
        loaduserprofiledata();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // 🔥 Derived data from backend structure
  const contacts = [
    { label: "Email", value: userdata.email || "", type: "email" },
    { label: "Phone", value: userdata.phone || "", type: "text" },
  ];

  const basic = [
    { label: "Gender", value: userdata.gender || "" },
    { label: "DOB", value: userdata.dob || "" },
  ];

  // 🔹 Contact handler
  const handleContactChange = (index, newValue) => {
    if (index === 0) {
      setuserdata((prev) => ({ ...prev, email: newValue }));
    } else if (index === 1) {
      setuserdata((prev) => ({ ...prev, phone: newValue }));
    }
  };

  // 🔹 Basic handler
  const handleBasicChange = (index, newValue) => {
    if (index === 0) {
      setuserdata((prev) => ({ ...prev, gender: newValue }));
    } else if (index === 1) {
      setuserdata((prev) => ({ ...prev, dob: newValue }));
    }
  };

  return (
    <>
      <Nav />

      <div className="mt-25 min-h-screen bg-white px-10 py-10 flex gap-10 items-start">
        <div className="flex-1 max-w-lg">

          {/* Avatar + Name */}
          <div className="flex items-center gap-4 mb-6 border-b border-gray-200 pb-5">

            {/* 🔥 Clickable Image Upload */}
            <label htmlFor="image">
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : userdata.image || assets.default_avatar
                }
                alt={userdata.name}
                className="w-16 h-16 rounded-full object-cover shadow cursor-pointer"
              />
            </label>

            <input
              type="file"
              id="image"
              hidden
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />

            <div>
              {isEditing ? (
                <input
                  className="text-2xl font-bold text-gray-800 border-b border-indigo-400 outline-none bg-transparent"
                  value={userdata.name || ""}
                  onChange={(e) =>
                    setuserdata((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              ) : (
                <h1 className="text-2xl font-bold text-gray-800">
                  {userdata.name}
                </h1>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <p className="text-xs font-semibold text-gray-400 underline tracking-widest uppercase mb-4">
            Contact Information
          </p>

          <div className="space-y-3 mb-8">
            {contacts.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="text-sm text-gray-500 w-20 shrink-0">
                  {item.label}
                </span>

                {isEditing ? (
                  <input
                    className="text-sm text-gray-800 flex-1 border-b border-indigo-300 outline-none bg-transparent"
                    value={item.value}
                    onChange={(e) =>
                      handleContactChange(i, e.target.value)
                    }
                  />
                ) : (
                  <span
                    className={`text-sm ${
                      item.type !== "text"
                        ? "text-blue-500"
                        : "text-gray-700"
                    }`}
                  >
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Basic Information */}
          <p className="text-xs font-semibold text-gray-400 underline tracking-widest uppercase mb-4">
            Basic Information
          </p>

          <div className="space-y-3 mb-10">
            {basic.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="text-sm text-gray-500 w-20 shrink-0">
                  {item.label}
                </span>

                {isEditing ? (
                  <input
                    className="text-sm text-gray-800 flex-1 border-b border-indigo-300 outline-none bg-transparent"
                    value={item.value}
                    onChange={(e) =>
                      handleBasicChange(i, e.target.value)
                    }
                  />
                ) : (
                  <span className="text-sm text-gray-700">
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-6 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>

            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
            >
              Save information
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;