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
          Eiusmod esse fugiat amet sit magna ex labore laborum irure adipisicing
          laborum aliqua voluptate commodo. Non cillum ullamco et ad sit
          adipisicing consequat. Id do eu esse nulla ipsum cupidatat dolor elit.
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
