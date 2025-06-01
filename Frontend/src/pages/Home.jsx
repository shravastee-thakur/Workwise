import React from "react";
import Hero from "../component/Hero";
import Categories from "../component/Categories";
import LatestJobs from "../component/LatestJobs";
import Subscribe from "../component/Subscribe";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestJobs />
      <Categories />
      <Subscribe />
    </>
  );
};

export default Home;
