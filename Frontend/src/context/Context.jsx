import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext = createContext()

export const AppContextProvider = (props)=>{
    
    const[bookappointment,setAppointment] = useState([])

    const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)

    const backendurl = import.meta.env.VITE_BACKEND_URL;
    
    const [doctors,setDoctors] = useState([])
    
    const getalldata = async()=>{

        try {
            const {data} = await axios.get(`${backendurl}/api/doctor/list`)
            
            if(data.success)
                setDoctors(data.doctors)
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const value={
        doctors,
        bookappointment,setAppointment,
        token,setToken,backendurl
    }


    useEffect(()=>{
        getalldata();
    },[])

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}