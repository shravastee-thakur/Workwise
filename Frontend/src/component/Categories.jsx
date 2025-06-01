import React from "react";

const Categories = () => {
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
    <section className="bg-[#e3edf0] w-full h-full mt-10 md:px-40 py-10">
      <h1 className="text-[#003a4e] text-xl font-bold md:text-2xl text-left mb-6">
        One Platform Many Solutions
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 justify-center">
        {jobOptions.map((job, id) => {
          return (
            <div
              className="bg-white hover:bg-[#d9f684] rounded-full cursor-pointer px-2 py-2 md:py-4 text-center text-sm font-semibold md:text-base md:font-bold text-[#003a4e] "
              key={id}
            >
              {job.title}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
