import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/login");
  };

  const handleLogout = async () => {
    await logout();
    alert("Logged out successfully");
    Navigate("/");
  };
  return (
    <div className="bg-[#d8ed99] pr-3">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-xl pl-3 md:text-3xl font-bold text-[#003a4e]">
            Workwise
          </h1>
        </div>

        <div className="hidden md:flex md:pr-3 gap-8">
          <ul className="flex font-medium items-center gap-6">
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/findJobs"}>
              <li>Find Jobs</li>
            </NavLink>
            <NavLink>
              <li>Career Advice</li>
            </NavLink>
          </ul>
        </div>
        {user ? (
          <div className="flex gap-2">
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-amber-700 hover:bg-red-700 text-white rounded-md cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleClick}
              className="px-3 py-1 bg-cyan-700 hover:bg-green-700 text-white rounded-md cursor-pointer"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
