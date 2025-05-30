import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-14">
        <h1 className="text-6xl font-bold text-[#003a4e] text-center">
          Get The Right Job <br /> You Deserve
        </h1>

        <h3 className="mt-6 text-xl text-center font-bold text-slate-500">
          Connecting top talent with great opportunities.
        </h3>

        <p className="text-center text-wrap mt-5">
          Discover thousands of job openings across industries. <br /> Whether
          you're a recent graduate or a seasoned professional, <br /> we help
          you take the next step in your career with confidence.
        </p>
      </div>
      <div className="flex w-[40%] mx-auto shadow-lg border border-gray-300 rounded-md overflow-hidden mt-6">
        <input
          type="text"
          placeholder="Find Your Dream Job"
          className="flex-1 px-3 py-2 outline-none border-none"
        />
        <button className="bg-cyan-700 text-white px-4 text-sm hover:bg-cyan-800 transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
