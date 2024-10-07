import React from "react";
import LandingLayout from "../../Components/Layouts/LandingLayout";
import Home from "../../Components/Section/SectionLanding/Home";
import Navbar from "../../Components/Modules/Navbar";
import About from "../../Components/Section/SectionLanding/About";
import Project from "../../Components/Section/SectionLanding/Project";
import Skills from "../../Components/Section/SectionLanding/Skills";
import Contact from "../../Components/Section/SectionLanding/Contanct";
import Footer from "../../Components/Section/SectionLanding/Footer";

const Landing = () => {
  return (
    <LandingLayout>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </LandingLayout>
  );
};

export default Landing;
