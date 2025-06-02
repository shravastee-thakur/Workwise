import React, { useContext } from "react";
import JobCard from "./JobCard";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LatestJobs = () => {
  const Navigate = useNavigate();
  const { fetchJobs } = useContext(AuthContext);

  const handleClick = () => {
    Navigate("/findJobs");
  };
  return (
    <section className="w-full h-full mt-5 md:px-40 py-10">
      <h1 className="text-[#003a4e] text-xl font-bold md:text-2xl text-left mb-6">
        Trending Jobs
      </h1>

      <div className="grid grid-cols-4 gap-10">
        {!fetchJobs ||
          fetchJobs.map((job, index) => {
            return (
              <div key={job._id || index}>
                <JobCard job={job} />
              </div>
            );
          })}
      </div>
      <div className="flex justify-center items-center mt-15">
        <button
          onClick={handleClick}
          className="bg-cyan-700 hover:bg-[#003a4e] text-white rounded-xl px-4 py-2 cursor-pointer"
        >
          Explore more
        </button>
      </div>
    </section>
  );
};

export default LatestJobs;
