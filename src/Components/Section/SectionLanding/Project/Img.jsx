import React from "react";

const Img = () => {
  return (
    <div className="pr-wrapper-img flex flex-wrap justify-center items-center gap-12">
      <div className="pr-wrapper-project h-[400px] w-[400px] bg-neutral-800 text-neutral-200 flex flex-col rounded-xl overflow-hidden border border-neutral-200/20">
        <img
          className="pr-img w-[500px] bg-cover bg-center"
          src="./img-12.png"
          alt="valorant"
        />
        <div className="p-4">
          <h1 className="pr-project-title text-4xl font-semibold">Valorant</h1>
          <h2 className="pr-project-subtitle mt-2">
            In this project I have cloned the Valorant website on the front end
          </h2>
          <button className="w-fit ab-button bg-[#007bff] px-7 py-2 font-medium tracking-wide hover:tracking-widest rounded-sm hover:rounded-md mt-5 text-neutral-200 duration-200">
            Check More
          </button>
        </div>
      </div>
      <div className="pr-wrapper-project h-[400px] w-[400px] bg-neutral-800 text-neutral-200 flex flex-col rounded-xl overflow-hidden border border-neutral-200/20">
        <img
          className="pr-img w-[500px] bg-cover bg-center"
          src="./img-12.png"
          alt="valorant"
        />
        <div className="p-4">
          <h1 className="pr-project-title text-4xl font-semibold">Valorant</h1>
          <h2 className="pr-project-subtitle mt-2">
            In this project I have cloned the Valorant website on the front end
          </h2>
          <button className="w-fit ab-button bg-[#007bff] px-7 py-2 font-medium tracking-wide hover:tracking-widest rounded-sm hover:rounded-md mt-5 text-neutral-200 duration-200">
            Check More
          </button>
        </div>
      </div>
      <div className="pr-wrapper-project h-[400px] w-[400px] bg-neutral-800 text-neutral-200 flex flex-col rounded-xl overflow-hidden border border-neutral-200/20">
        <img
          className="pr-img w-[500px] bg-cover bg-center"
          src="./img-12.png"
          alt="valorant"
        />
        <div className="p-4">
          <h1 className="pr-project-title text-4xl font-semibold">Valorant</h1>
          <h2 className="pr-project-subtitle mt-2">
            In this project I have cloned the Valorant website on the front end
          </h2>
          <button className="w-fit ab-button bg-[#007bff] px-7 py-2 font-medium tracking-wide hover:tracking-widest rounded-sm hover:rounded-md mt-5 text-neutral-200 duration-200">
            Check More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Img;
