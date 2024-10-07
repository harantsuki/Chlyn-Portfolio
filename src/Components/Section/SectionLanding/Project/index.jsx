import React from "react";
import Img from "./Img";

const Project = () => {
  return (
    <section
      id="project"
      className="pr-container h-[90vh] px-72 flex flex-col justify-center items-center"
    >
      <div className="pr-wrapper-content flex flex-col justify-center items-center mt-auto gap-20">
        <div className="flexf flex-col text-center text-neutral-200">
          <h1 className="pr-title text-7xl font-semibold">My Projects</h1>
          <h2 className="pr-subtitle text-lg mt-3 text-neutral-400">
            These are all the projects I made
          </h2>
        </div>
        <Img />
      </div>
      <div className="w-full h-[1px] bg-white/40 mt-auto"></div>
    </section>
  );
};

export default Project;
