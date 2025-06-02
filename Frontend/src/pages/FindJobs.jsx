import JobCard from "../component/JobCard";
import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

const FindJobs = () => {
  const { fetchJobs } = useContext(AuthContext);

  return (
    <section>
      <div className="max-w-7xl mx-auto mt-5">
        <div>
          <div className="flex w-[90%] md:w-[40%] mx-auto shadow-lg border border-gray-300 rounded-full overflow-hidden mt-10">
            <input
              type="search"
              placeholder="Find Your Dream Job"
              className="flex-1 px-3 py-2 outline-none border-none text-sm md:text-base"
            />
            <button className="bg-cyan-800 text-white px-4 py-2 text-sm md:text-base hover:bg-cyan-700 transition cursor-pointer">
              Search
            </button>
          </div>

          {!fetchJobs || fetchJobs.length <= 0 ? (
            <span>No jobs found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-6 mt-10 mb-30">
              <div className="grid grid-cols-3 gap-5">
                {fetchJobs.map((job, index) => (
                  <JobCard key={job._id || index} job={job} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FindJobs;
