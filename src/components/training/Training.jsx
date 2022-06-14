import React from "react";
import "./training.css";

import { Link } from "react-router-dom";

import Pod from "../../assets/pod.jpg";
import Moon from "../../assets/moon.jpg";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          For decades, we have been testing our developments together with
          SpaceX. Our employees during this time showed the best result,
          together we overcame all the obstacles that were in our way. First the
          Moon, then Mars, all these victories show our stubborn testing of the
          vehicles and our people. So with us you will definitely be able to fly
          into space in complete safety for an indefinite time and be in the
          role of an astronaut at least once in your life.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Moon} className="img" alt="Moon" />
          </div>
          <div className="image-stack bottom">
            <img src={Pod} className="img" alt="Pod" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
