import AllJobs from "../component/AllJobs";
import JobFilter from "../component/JobFilter";
import React from "react";

const FindJobs = () => {
  const JobArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section>
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-[20%]">
            <JobFilter />
          </div>

          {JobArray.length <= 0 ? (
            <span>No jobs found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-6">
              {JobArray.map((index, job) => (
                <AllJobs />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FindJobs;
