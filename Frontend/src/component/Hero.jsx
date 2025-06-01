import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-3xl md:text-6xl font-bold text-[#003a4e] text-center">
          Get The Right Job <br /> You Deserve
        </h1>

        <h3 className="mt-6 text-base md:text-xl text-center font-bold text-slate-500">
          Connecting top talent with great opportunities.
        </h3>
      </div>
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
    </div>
  );
};

export default Hero;
