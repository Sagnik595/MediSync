import { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props)=>{

    const [aToken, setatoken] = useState('')

    const value = {
        aToken,setatoken
    }
    return (
    <AdminContext.Provider value={value}>
        {props.children}
    </AdminContext.Provider>
    );

}

export default AdminContextProvider;