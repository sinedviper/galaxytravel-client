import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation className="icon" />
            <div>
              <p>30b Leiker St.</p>
              <h4>Hotorn, LA, California</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone className="icon" />
              1-800-323-4447
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk className="icon" />
              galaxytravel@galaxy.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Aboute the company</h4>
          <p>
            Our company is engaged in a trip to an intergalactic station near
            the earth, in which you can fly around the earth, also try the force
            of gravity, and even go into outer space.We have been developing
            this program for several years. After traveling to the Moon and
            Mars, and with their successful implementation, you can not be
            afraid for your life.
          </p>
          <div className="social">
            <a href="https://www.facebook.com/" target="blank">
              <FaFacebook className="icon" />
            </a>
            <a href="https://twitter.com/" target="blank">
              <FaTwitter className="icon" />
            </a>
            <a href="https://www.instagram.com/" target="blank">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
