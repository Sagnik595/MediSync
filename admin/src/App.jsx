import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import { AdminContext } from "./context/AdminContext";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Adddoctor from "./pages/Admin/Adddoctor";
import DoctorList from "./pages/Admin/DoctorList";
import Appointents from "./pages/Admin/Appointents";


const App = () => {
  const { aToken } = useContext(AdminContext);
  return (
    <>
      {aToken ? (
        <div>
          <ToastContainer />
          <Nav/>
          <div className="flex items-start">
            <Sidebar/>
            <Routes>
              <Route path="/" element={<Navigate to="/admin-dashboard" />}/>
              <Route path="/admin-dashboard" element={<Dashboard/>}/>
              <Route path="/all-appointments" element={<Appointents/>}/>
              <Route path="/add-doctor" element={<Adddoctor/>}/>
              <Route path="/alldoctors" element={<DoctorList/>}/>
            </Routes>
            
          </div>
        </div>
      ) : (
        <div>
          <Login />
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default App;
