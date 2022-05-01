import React from "react";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import HeroImage from "../components/heroimage/HeroImage";
import TrainingCard from "../components/training/Training";

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="TRAINING." text="Pre-Fligt & In-Flight Training." />
      <TrainingCard />
      <Footer />
    </div>
  );
};

export default Training;
