import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const Img = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-10">
      <div className="bg-neutral-800 flex flex-col justify-center items-center rounded-md hover:rounded-xl h-[240px] w-[240px] p-5 border border-white/10 duration-200">
        <FaHtml5 className="text-[#007bff]" size={"50px"} />
        <h1 className="text-2xl font-semibold mt-1 text-neutral-200">HTML</h1>
        <p className="text-[12px] mt-3 text-neutral-400 text-center">
          HyperText Markup Language (HTML) is a text-based markup language that
          defines the structure and content of web pages.
        </p>
      </div>
      <div className="bg-neutral-800 flex flex-col justify-center items-center rounded-md hover:rounded-xl h-[240px] w-[240px] p-5 border border-white/10 duration-200">
        <FaCss3Alt className="text-[#007bff]" size={"50px"} />
        <h1 className="text-2xl font-semibold mt-1 text-neutral-200">CSS</h1>
        <p className="text-[12px] mt-3 text-neutral-400 text-center">
          language for styling and designing the appearance of web elements.
        </p>
      </div>
      <div className="bg-neutral-800 flex flex-col justify-center items-center rounded-md hover:rounded-xl h-[240px] w-[240px] p-5 border border-white/10 duration-200">
        <FaJs className="text-[#007bff]" size={"50px"} />
        <h1 className="text-2xl font-semibold mt-1 text-neutral-200">JS</h1>
        <p className="text-[12px] mt-3 text-neutral-400 text-center">
          A programming language used to make web elements interactive.
        </p>
      </div>
      <div className="bg-neutral-800 flex flex-col justify-center items-center rounded-md hover:rounded-xl h-[240px] w-[240px] p-5 border border-white/10 duration-200">
        <FaReact className="text-[#007bff]" size={"50px"} />
        <h1 className="text-2xl font-semibold mt-1 text-neutral-200">
          REACTJS
        </h1>
        <p className="text-[12px] mt-3 text-neutral-400 text-center">
          A JavaScript library for building dynamic user interfaces with
          reusable components.
        </p>
      </div>
      <div className="bg-neutral-800 flex flex-col justify-center items-center rounded-md hover:rounded-xl h-[240px] w-[240px] p-5 border border-white/10 duration-200">
        <RiTailwindCssFill className="text-[#007bff]" size={"50px"} />
        <h1 className="text-2xl font-semibold mt-1 text-neutral-200">
          TAILWINDCSS
        </h1>
        <p className="text-[12px] mt-3 text-neutral-400 text-center">
          A utility-first CSS framework for quickly designing without writing
          custom CSS.
        </p>
      </div>
      <div className="bg-neutral-800 flex flex-col justify-center items-center rounded-md hover:rounded-xl h-[240px] w-[240px] p-5 border border-white/10 duration-200">
        <IoLogoFigma className="text-[#007bff]" size={"50px"} />
        <h1 className="text-2xl font-semibold mt-1 text-neutral-200">FIGMA</h1>
        <p className="text-[12px] mt-3 text-neutral-400 text-center">
          A cloud-based design tool for UI/UX design and collaboration in
          creating prototypes and interfaces.
        </p>
      </div>
    </div>
  );
};

export default Img;
