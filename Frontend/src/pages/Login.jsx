import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="mt-8 lg:mt-20 flex justify-center items-center">
      <div className="relative w-10/12 sm:w-3/4 md:w-2/5 lg:w-1/4 border-2 rounded-xl p-4 md:p-6 bg-[#d8ed99]">
        <h1 className="text-center mt-3 text-2xl font-bold">Login</h1>

        <form className="p-4">
          <div className="flex flex-col gap-1 mt-2">
            <label className="text-sm font-semibold">Email</label>
            <input
              className="border p-2 rounded-lg bg-white"
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>

          <div className="flex flex-col gap-1 mt-2 relative">
            <label className="text-sm font-semibold">Password</label>
            <input
              className="border p-2 rounded-lg bg-white"
              type="password"
              placeholder="Enter your password"
              name="password"
            />
            <div className="absolute top-8 right-3">
              {!showPassword ? (
                <VisibilityOffIcon
                  onClick={() => setShowPassword(!showPassword)}
                  fontSize="small"
                />
              ) : (
                <VisibilityIcon
                  onClick={() => setShowPassword(!showPassword)}
                  fontSize="small"
                />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-4">
            <button
              type="submit"
              className="bg-[#27667B] text-white font-bold p-2 rounded-lg"
            >
              Login
            </button>
            <p className="mt-2 text-center text-sm">
              Don't have an account?
              <NavLink
                className="text-indigo-600 font-semibold"
                to={"/register"}
              >
                Register
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
