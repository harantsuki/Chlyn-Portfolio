import React from "react";
import Img from "./img";

const Skills = () => {
  return (
    <section
      id="skills"
      className="sk-container h-[90vh] px-72 flex flex-col justify-center items-center"
    >
      <div className="sk-wrapper-content flex flex-col justify-center items-center mt-auto gap-20 w-full">
        <div className="flexf flex-col text-center text-neutral-200">
          <h1 className="sk-title text-7xl font-semibold">My Skills</h1>
          <h2 className="sk-subtitle text-lg mt-3 text-neutral-400">
            These are all my Skills
          </h2>
        </div>
        <Img />
      </div>
      <div className="w-full h-[1px] bg-white/40 mt-auto"></div>
    </section>
  );
};

export default Skills;
