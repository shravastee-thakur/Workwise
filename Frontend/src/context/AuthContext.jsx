import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [fetchJobs, setFetchJobs] = useState(null);
  const [error, setError] = useState(null); // For error handling

  const login = async (userData) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        userData,
        { withCredentials: true }
      );

      if (res.data.success) {
        setUser({ id: res.data.id, access: res.data.accessToken });
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

  const getAllJobs = async () => {
    try {
      console.log("Attempting to fetch jobs..."); // Debug log
      const res = await axios.get(
        "http://localhost:3000/api/v1/job/getAllJobs",
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${user.access}`, // Add this line
          },
        }
      );
      console.log("Response received:", res.data.data);
      if (res.data.success) {
        const job = res.data.data;
        const jobsArray = Array.isArray(job) ? job : [job];
        setFetchJobs(jobsArray);
      }
    } catch (error) {
      console.error("Failed to fetch jobs - Full error:", {
        message: error.message,
        response: error.response,
        request: error.request,
        config: error.config,
      });
      setError(error.message);
    }
  };

  useEffect(() => {
    if (user?.access) {
      getAllJobs();
    }
  }, [user]);

  if (error) return <div>Error: {error}</div>;
  return (
    <AuthContext.Provider value={{ user, login, logout, fetchJobs }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
