import React from "react";
import Footer from "../components/footer/Footer.js";
import Navbar from "../components/nav/Navbar.js";
import HeroImage from "../components/heroimage/HeroImage";
import Form from "../components/form/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="CONTACT." text="Contact GLX Travel" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
