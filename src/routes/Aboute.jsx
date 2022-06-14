import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/nav/Navbar";
import About from "../components/aboute/Aboute";
import HeroImage from "../components/heroimage/HeroImage";

const Aboute = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="Aboute." text="About Us." />
      <About />
      <Footer />
    </div>
  );
};

export default Aboute;
