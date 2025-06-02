import React from "react";

const JobFilter = () => {
  const jobOptions = [
    {
      title: "Frontend Developer",
    },
    {
      title: "Backend Developer",
    },
    {
      title: "Data Scientist",
    },
    {
      title: "Product Manager",
    },
    {
      title: "Devops Engineer",
    },
    {
      title: "Video Editor",
    },
    {
      title: "UI/UX Design",
    },
    {
      title: "Java Developer",
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 justify-center">
        {jobOptions.map((job, id) => {
          return (
            <button
              className="bg-[#e3edf0] rounded-full cursor-pointer px-2 py-2 md:py-4 text-center text-sm font-semibold md:text-base md:font-bold text-[#003a4e] "
              key={id}
            >
              {job.title}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default JobFilter;
