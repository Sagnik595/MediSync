import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [bookappointment, setAppointment] = useState([]);

  const [token, setToken] = useState(
    localStorage.getItem("token") || false
  );

  const defaultUser = {
    name: "",
    avatar: "",
    contacts: [
      { label: "Email", value: "", type: "email" },
      { label: "Phone", value: "", type: "text" },
    ],
    basic: [
      { label: "Gender", value: "" },
      { label: "DOB", value: "" },
    ],
  };

  const [userdata, setuserdata] = useState(defaultUser);
  const [doctors, setDoctors] = useState([]);

  const backendurl = import.meta.env.VITE_BACKEND_URL;

  // Get all doctors
  const getalldata = async () => {
    try {
      const { data } = await axios.get(`${backendurl}/api/doctor/list`);

      if (data.success) {
        setDoctors(data.doctors);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Load user profile
  const loaduserprofiledata = async () => {
    try {
      const { data } = await axios.get(
        `${backendurl}/api/user/getprofile`,
        {
          headers: { token },
        }
      );

      if (data.success) {
        const user = data.userData;

        setuserdata((prev) => ({
          ...prev,
          ...user,
          contacts: user.contacts || prev.contacts,
          basic: user.basic || prev.basic,
        }));
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Get all appointments of logged-in user
  const loadAppointments = async () => {
    try {
      const { data } = await axios.get(
        `${backendurl}/api/user/getAppointments`,
        {
          headers: { token },
        }
      );

      if (data.success) {
        setAppointment(data.appointments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const value = {
    doctors,
    bookappointment,
    setAppointment,
    token,
    setToken,
    backendurl,
    userdata,
    setuserdata,
    loaduserprofiledata,
    loadAppointments,
  };

  useEffect(() => {
    getalldata();
  }, []);

  useEffect(() => {
    if (token) {
      loaduserprofiledata();
      loadAppointments();
    } else {
      setuserdata(defaultUser);
      setAppointment([]);
    }
  }, [token]);

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};