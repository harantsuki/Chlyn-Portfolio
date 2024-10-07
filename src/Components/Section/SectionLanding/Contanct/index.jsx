import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="co-container px-72 h-[50vh] flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center mt-auto gap-20">
        <div className="flex flex-col text-center text-neutral-200">
          <h1 className="text-7xl font-semibold">CONTACT</h1>
          <h2 className="text-lg mt-3 text-neutral-400">Contact Me At</h2>
        </div>
        <div className="co-wrapper-contact grid grid-cols-2 gap-7">
          <div className="border border-white/30 flex justify-start items-center px-4 py-2 gap-3 rounded-sm hover:rounded-md duration-200">
            <FaPhone />
            <h1>+62 823-3889-7053</h1>
          </div>
          <div className="border border-white/30 flex justify-start items-center px-4 py-2 gap-3 rounded-sm hover:rounded-md duration-200">
            <MdEmail />
            <h1>testing@gmail.com</h1>
          </div>
          <div className="border border-white/30 flex justify-start items-center px-4 py-2 gap-3 rounded-sm hover:rounded-md duration-200">
            <FaMapMarkerAlt />
            <h1>Indonesia, Probolinggo</h1>
          </div>
          <div className="border border-white/30 flex justify-start items-center px-4 py-2 gap-3 rounded-sm hover:rounded-md duration-200">
            <FaPhone />
            <h1>+62 823-3889-7053</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white/40 mt-auto"></div>
    </section>
  );
};

export default Contact;
