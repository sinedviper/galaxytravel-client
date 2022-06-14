import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/nav/Navbar";
import Galar from "../components/galary/Galary";
import HeroImage from "../components/heroimage/HeroImage";

const Galary = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="GALARY." text="Look at this travel." />
      <Galar />
      <Footer />
    </div>
  );
};

export default Galary;
