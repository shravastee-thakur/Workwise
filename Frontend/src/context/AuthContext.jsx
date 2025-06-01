// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     const checkAuth = async () => {
  //       try {
  //         const res = await axios.get("http://localhost:3000/api/v1/user/me", {
  //           withCredentials: true,
  //         });
  //         if (res.data.success) {
  //           setUser(res.data.user);
  //         }
  //       } catch (error) {
  //         setUser(null);
  //       }
  //     };
  //     checkAuth();
  //   }, []);

  const login = async (userData) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        userData,
        { withCredentials: true }
      );
      console.log(res.data);

      if (res.data.success) {
        setUser({ id: res.data.id }); // Adjust based on returned structure
        return true;
      }
    } catch (error) {
      console.error("Login failed", error);
    }
    return false;
  };

  const logout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/logout",
        {},
        { withCredentials: true }
      );
      if (res.data.success) {
        setUser(null);
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
