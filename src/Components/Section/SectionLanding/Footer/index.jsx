import React from "react";

const Footer = () => {
  return (
    <footer className="fo-container w-full bg-neutral-200 text-neutral-900 px-72 py-8 flex flex-col justify-center items-center gap-8">
      <div className="fo-wrapper-content flex justify-between items-center w-full">
        <h1 className="text-3xl font-bold">Chlyn.</h1>
        <ul className="fo-wrapper-navigation flex gap-14">
          <a href="#home">
            <li className="hover:font-semibold hover:text-[#007bff] duration-200">
              Home
            </li>
          </a>
          <a href="#about">
            <li className="hover:font-semibold hover:text-[#007bff] duration-200">
              About
            </li>
          </a>
          <a href="#project">
            <li className="hover:font-semibold hover:text-[#007bff] duration-200">
              Project
            </li>
          </a>
          <a href="#skills">
            <li className="hover:font-semibold hover:text-[#007bff] duration-200">
              Skills
            </li>
          </a>
          <a href="#contact ">
            <li className="hover:font-semibold hover:text-[#007bff] duration-200">
              Contact
            </li>
          </a>
        </ul>
      </div>
      <div className="bg-neutral-900 w-full h-[1px]"></div>
      <div>
        <h1 className="text-neutral-900 text-sm">
          © 2024 Chlyn Havia. All right reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
