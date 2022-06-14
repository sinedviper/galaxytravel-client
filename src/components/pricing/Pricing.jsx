import React from "react";
import { Link } from "react-router-dom";
import "./pricing.css";

const data = [
  {
    id: 1,
    cost: 1,
    name: "Basic",
    days: 3,
    info1: "Views",
    info2: "Featured",
    info3: "Private Quarters",
  },
  {
    id: 2,
    cost: 2,
    name: "Suite",
    days: 7,
    info1: "Views, Gravity check",
    info2: "Featured",
    info3: "Private Quarters with Open View",
  },
  {
    id: 3,
    cost: 3,
    name: "Executive",
    days: 14,
    info1: "Views, Gravity check, Spacewalk",
    info2: "Featured",
    info3: "Private Quarters with overlooking the Earth and the Moon",
  },
];

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        {data.map(({ id, cost, name, days, info1, info2, info3 }) => {
          return (
            <div className="card" key={id}>
              <h3>- {name} -</h3>
              <span className="bar"></span>
              <p className="btc"> {cost} BTC</p>
              <p>- {days} Days -</p>
              <p>- {info1} -</p>
              <p>- {info2} -</p>
              <p>- {info3} -</p>
              <Link to="/contact" className="btn">
                Buy
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
