import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorList = () => {
  const { doctors, aToken, getallDoctors } = useContext(AdminContext);
  
  useEffect(() => {
    if (aToken) 
      getallDoctors();
  }, []);
  return (
    <div>
      <h1>This is the doctor list</h1>
    </div>
  );
};

export default DoctorList;
