import React from "react";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import HeroImage from "../components/heroimage/HeroImage";
import PricingCards from "../components/pricing/Pricing";

function Pricing() {
  return (
    <div>
      <Navbar />
      <HeroImage heading="PRICING." text="Choose your trip." />
      <PricingCards />
      <Footer />
    </div>
  );
}

export default Pricing;
