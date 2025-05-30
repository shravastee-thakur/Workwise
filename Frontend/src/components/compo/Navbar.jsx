import React from "react";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-[#d8ed99]">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-3xl font-bold text-[#003a4e]">Workwise</h1>
        </div>

        <div className="flex gap-8">
          <ul className="flex font-medium items-center gap-6">
            <li>Home</li>
            <li>Browse</li>
            <li>Job</li>
          </ul>

          {user ? (
            <div className="flex gap-2">
              <button className="px-4 py-1 bg-cyan-700 text-white rounded-md cursor-pointer">
                Profile
              </button>
              <button className="px-3 py-1 bg-amber-700 text-white rounded-md cursor-pointer">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button className="px-4 py-1 bg-cyan-700 text-white rounded-md cursor-pointer">
                Register
              </button>
              <button className="px-3 py-1 bg-amber-700 text-white rounded-md cursor-pointer">
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
