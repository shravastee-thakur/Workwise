import React from "react";

const JobCard = ({ job }) => {
  if (!job) return null;

  return (
    <div className="bg-[#e2f6cd] px-3 py-3 rounded-xl w-full shadow-md">
      <h3 className="font-bold text-xl text-[#003a4e]">{job.title}</h3>
      <p className="font-semibold text-base">
        {job.company?.name || "Unknown Company"}
      </p>
      <p className="mt-2 line-clamp-3">{job.description}</p>

      <div className="flex gap-5 font-semibold text-[#003a4e] mt-2">
        <p>{job.location}</p>
        <p>{job.jobType}</p>
      </div>

      <div className="flex gap-10 mt-2 items-center">
        <h1 className="text-2xl">
          {job.salary ? `₹${job.salary}` : "Salary NA"}
        </h1>
        <button className="bg-[#1492bb] hover:bg-green-500 text-white rounded-xl px-3 py-1 cursor-pointer">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
