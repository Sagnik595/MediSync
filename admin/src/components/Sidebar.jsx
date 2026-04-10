import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin-dashboard",
      icon: "📊",
    },
    {
      name: "Appointments",
      path: "/all-appointments",
      icon: "📅",
    },
    {
      name: "Add Doctor",
      path: "/add-doctor",
      icon: "➕",
    },
    {
      name: "Doctors List",
      path: "/alldoctors",
      icon: "👨‍⚕️",
    },
  ];
  const {aToken} = useContext(AdminContext)
  return (
    <>
    {aToken?(
      <>
      <div className="w-64 min-h-screen bg-gray-100 border-r">
        <div className="pt-6">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 text-sm transition-all
                ${
                  isActive
                    ? "bg-blue-100 text-blue-600 border-r-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
      </>
    ):(
      <h1>You are not the admin</h1>
    )}
    </>
  );
};

export default Sidebar;