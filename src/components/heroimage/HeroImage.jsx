import React, { Component } from "react";
import space from "../../assets/heroImg.jpg";
import "./heroimage.css";

class HeroImage extends Component {
  render() {
    return (
      <div className="hero-img">
        <img src={space} alt="space" />
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImage;
