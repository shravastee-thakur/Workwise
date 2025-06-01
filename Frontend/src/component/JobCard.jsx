import React from "react";

const JobCard = () => {
  return (
    <div className="bg-[#e2f6cd] px-3 py-3 rounded-xl w-fit">
      <h3 className="font-bold text-xl text-[#003a4e]">Job Title</h3>
      <p className="font-semibold text-base">Company Name</p>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        corrupti
      </p>
      <div className="flex gap-5 font-semibold text-[#003a4e] mt-2">
        <p>Location</p>
        <p>Job Type</p>
      </div>

      <div className="flex gap-10 mt-2 items-center">
        <h1 className="text-2xl">Salary</h1>
        <button className="bg-[#1492bb] hover:bg-green-500 text-white rounded-xl px-3 py-1 cursor-pointer">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
