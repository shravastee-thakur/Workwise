import React from "react";

const Subscribe = () => {
  return (
    <section className="flex justify-center items-center mt-15">
      <div className="bg-[#024751] px-10 py-10 w-[60%] rounded-2xl">
        <h1 className="text-4xl font-bold text-white text-center">
          Never Want To Miss <br /> Any Job News?
        </h1>
        <p className="text-center text-sm text-white mt-6">
          Subscribe to stay up-to-date on insights, events and new solutions.{" "}
          <br />
          You can unsubscribe at any time
        </p>

        <div className="flex w-[90%] md:w-[40%] mx-auto bg-white rounded-full overflow-hidden mt-10">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-3 py-2 outline-none border-none text-sm md:text-base"
          />
          <button className="bg-[#d7fe62]  px-4 py-2 text-sm md:text-base cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
