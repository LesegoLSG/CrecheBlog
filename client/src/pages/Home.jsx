import React, { useState, useEffect } from "react";
import Banner from "../Components/Banner/Banner";
import Metrix from "../Components/Banner/Metrix";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Team from "./Team";

const Home = () => {
  return (
    <div className="w-full h-auto">
      <Banner />
      <Metrix />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
