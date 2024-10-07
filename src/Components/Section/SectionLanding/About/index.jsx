import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="ab-container h-[70vh] px-72 flex flex-col justify-center items-center"
    >
      <div className="ab-wrapper-content w-full h-full flex justify-center items-center mt-auto gap-36 text-neutral-200">
        <div>
          <img
            className="ab-icon-furina w-[350px]"
            src="./furina-icon.webp"
            alt="my photo"
          />
        </div>
        <div>
          <h1 className="ab-title text-6xl font-semibold">CHLYN HAVIA</h1>
          <h2 className="ab-subtitle text-2xl font-medium mt-4">
            Front End Developer
          </h2>
          <p className="ab-desc mt-1 flex flex-col gap-2 text-neutral-400">
            <span>
              Hi, I’m Chlyn Havia, a front-end developer and UI/UX designer from
              Indonesia. <br /> I graduated from a vocational school with a
              focus on information technology <br /> and am passionate about
              creating engaging user interfaces <br /> and enjoyable
              experiences.
            </span>
            <span>
              In my free time, I love gaming and sports, which help me relax and
              enhance <br /> my strategic thinking. My goal is to become an
              innovative software engineer. <br /> I'm eager to learn and
              explore new opportunities for growth. <br /> Feel free to reach
              out for collaboration or discussions!
            </span>
          </p>
          <button className="ab-button bg-[#007bff] px-7 py-2 font-medium tracking-wide hover:tracking-widest rounded-sm hover:rounded-md mt-5 duration-200">
            Download CV
          </button>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white/40 mt-auto"></div>
    </section>
  );
};

export default About;
