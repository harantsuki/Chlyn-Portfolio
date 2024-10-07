import React from "react";
import { motion } from "framer-motion";

export const NavigationLG = () => {
  return (
    <ul className="nb-wrapper-navigation-lg flex justify-center items-center gap-28 font-medium">
      <li>
        <a
          className="tracking-[1px] hover:tracking-[4px] duration-200"
          href="#home"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="tracking-[1px] hover:tracking-[4px] duration-200"
          href="#about"
        >
          About
        </a>
      </li>
      <li>
        <a
          className="tracking-[1px] hover:tracking-[4px] duration-200"
          href="#project"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          className="tracking-[1px] hover:tracking-[4px] duration-200"
          href="#skills"
        >
          Skills
        </a>
      </li>
      <li className="bg-[#007bff] rounded-sm hover:rounded-md px-5 py-1 duration-200">
        <a className="tracking-[1px]" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
};

export const NavigationSM = ({ isBar }) => {
  return (
    <>
      {isBar && (
        <motion.ul
          className="bg-[#1717177a] text-xl backdrop-blur-md nb-wrapper-navigation-sm flex justify-center items-center flex-col absolute min-h-screen inset-0 gap-10 font-medium"
          initial={{ translateX: "100%" }}
          animate={{ translateX: 0 }}
          transition={{ duration: 0.3 }}
        >
          <li>
            <a
              className="tracking-[1px] hover:tracking-[4px] duration-200"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="tracking-[1px] hover:tracking-[4px] duration-200"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="tracking-[1px] hover:tracking-[4px] duration-200"
              href="#project"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="tracking-[1px] hover:tracking-[4px] duration-200"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="tracking-[1px] hover:tracking-[4px] duration-200"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </motion.ul>
      )}
    </>
  );
};
