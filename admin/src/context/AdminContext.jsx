import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props)=>{

    const [aToken, setatoken] = useState(localStorage.getItem('atoken'))
    const [doctors, setDoctors] = useState([]);

    const backendurl = import.meta.env.VITE_BACKEND_URL;

    const getallDoctors = async ()=>{
        try {
            const {data} = await axios.post(`${backendurl}api/admin/alldoctors`,{},{headers:{token: aToken}})
            if(data.success)
            {
                setDoctors(data.doctors);
            }
            else
            {
                toast('Problem fetching the doctor data!!');
            }
        } catch (error) {
            toast.error(error.message);
        }
    }


    const changeAvailability = async (docID)=>{
        try {
            const {data} = await axios.post(`${backendurl}api/admin/changeavailability`,{docID},{headers:{token: aToken}})
            if(data.success)
            {
                toast('Doctor availability changed successfully!!');
                getallDoctors(); // Refresh the doctors list
            }
            else
            {
                toast('Problem changing doctor availability!!');
            }
        } catch (error) {
            toast.error(error.message);
        }
    }


    const value = {
        aToken,setatoken,
        backendurl,doctors,
        getallDoctors,changeAvailability
    }
    return (
    <AdminContext.Provider value={value}>
        {props.children}
    </AdminContext.Provider>
    );

}

export default AdminContextProvider;