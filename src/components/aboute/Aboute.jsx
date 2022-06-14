import React from "react";
import "./aboute.css";
import GoogleMapReact from "google-map-react";

const About = () => {
  const defaultProps = {
    center: {
      lat: 33.91412,
      lng: -118.35568,
    },
    zoom: 11,
  };
  return (
    <div className="aboute">
      <div className="left">
        <h1>Aboute</h1>
        <p>
          Our history began in 1998. Then the company was just opened and we
          started our journey. A few years later, we launched the shuttle into
          space for the first time. It was a huge step towards the goal of going
          to Mars. Our team consists of more than 300 employees, which includes
          engineers, scientists, programmers and a bunch of other professions
          who do their work professionally and at a high level. All these
          employees know their business and go to their dream.
        </p>
      </div>
      <div className="rights">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAa2hSIszR-olaUAPa6UdB1amotCujuq44" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        />
      </div>
    </div>
  );
};

export default About;
