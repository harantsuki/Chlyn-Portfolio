import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="hm-container h-screen w-full flex flex-col justify-center items-center px-72 text-neutral-200"
    >
      <div className="flex flex-col items-center justify-center mt-auto">
        <h2 className="hm-subtitle text-[20px] flex gap-1 -mb-[8px] font-normal">
          Hi, My Name Is
          <span className="text-[#007bff] font-bold">Chlyn Havia</span>
        </h2>
        <h1 className="hm-title text-[120px] font-bold leading-none -ml-[12px] text-center">
          FRONT END <br /> DEVELOPER
        </h1>
        <p className="hm-desc text-3xl font-light mt-4 leading-[40px] text-center">
          I will create a premium website <br /> according to your wishes
        </p>
      </div>
      <div className="w-full h-[1px] bg-white/40 mt-auto"></div>
    </section>
  );
};

export default Home;
