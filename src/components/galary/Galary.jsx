import React from "react";
import "./galary.css";

import Earth from "../../assets/earth.jpg";
import Flyer1 from "../../assets/flyer.jpg";
import Flyer2 from "../../assets/flyer1.jpg";
import Flyer3 from "../../assets/flyer3.jpg";
import People from "../../assets/people.jpg";
import Person from "../../assets/person.jpg";
import Starship from "../../assets/starship.jpg";
import Station from "../../assets/station.jpg";

const Galar = () => {
  return (
    <div className="galary">
      <div className="image__topleft">
        <div className="image-stack top">
          <img src={Earth} className="img" alt="Earth" />
        </div>
        <div className="image-stack bottom">
          <img src={Flyer1} className="img" alt="Flyer" />
        </div>
      </div>
      <div className="image__topright">
        <div className="image-stack top">
          <img src={Flyer2} className="img" alt="Flyer" />
        </div>
        <div className="image-stack bottom">
          <img src={Flyer3} className="img" alt="Flyer" />
        </div>
      </div>
      <div className="image__bottomleft">
        <div className="image-stack top">
          <img src={People} className="img" alt="People" />
        </div>
        <div className="image-stack bottom">
          <img src={Person} className="img" alt="Person" />
        </div>
      </div>
      <div className="image__bottomright">
        <div className="image-stack top">
          <img src={Starship} className="img" alt="Starship" />
        </div>
        <div className="image-stack bottom">
          <img src={Station} className="img" alt="Station" />
        </div>
      </div>
    </div>
  );
};

export default Galar;
