import React from "react";
import Hero from "./content/Hero.jsx";
import Navigation from "./boiler/Navigation.jsx";
import Scroll from "./utils/Scroll.jsx";
import About from "./content/About.jsx";
const Webpage = () => {
  return (
    <>
      <Scroll>
        <Navigation />
        <Hero />
        <About />
      </Scroll>
    </>
  );
};

export default Webpage;
