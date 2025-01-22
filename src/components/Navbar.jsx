import React from "react";
import {Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // let navigate = useNavigate();
  // const handleclick = () =>{
  //   navigate("/login");
  // }
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center py-5 px-4 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-500"> &lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </div>

        
        <form className=" flex justify-between items-center gap-3">
          <Link className="font-bold text-white bg-green-700 my-6 px-4 py-1  h- rounded-full  ring-white ring-1" to="/login" role="button">
            Login
          </Link>
          <Link className="font-bold text-white bg-green-700 my-6 px-4 py-1  h- rounded-full ring-white ring-1" to="/signup" role="button">
            Signup
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
