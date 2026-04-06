import React, { useState } from "react";

const Nav = () => {
    const [status,setStatus] = useState('LOGIN')
  return (
    <>
      <div>
        <div className="pt-6 px-5 pb-3 flex flex-wrap border-gray-500 border-[0_0_1px_0]">
          <div className="flex">
            <div className="h-9.5 w-9.5 border border-blue-500 rounded-[10px_10px_10px_10px] ">
              <img
                className="cursor-pointer text-[100px]"
                src="/logo2.png"
                alt="Logo"
              />
            </div>
            <h1 className="cursor-pointer mt-1 ml-3 text-3xl font-semibold">
              Medi<span className="text-blue-500">Sync</span>
            </h1>
          </div>
          <p className="text-gray-500 text-[11px] font-bold text-center border rounded-[15px_15px_15px_15px] h-4.25 px-2 ml-1 mt-3.5">
            ADMIN
          </p>
          <div className="ml-auto">
            <button className=" px-6.5 py-1 rounded-[25px_25px_25px_25px] bg-blue-500 text-white">
              {status}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
