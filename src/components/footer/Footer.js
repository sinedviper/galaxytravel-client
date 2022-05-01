import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation className="icon" />
            <div>
              <p>123 Acme St.</p>
              <h4>Housten, Tx</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone className="icon" />
              1-800-123-1234
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk className="icon" />
              trips@galaxy.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Aboute the company</h4>
          <p>
            Esse ut id pariatur incididunt qui veniam voluptate ea ex laboris
            commodo veniam tempor. In exercitation ipsum cillum irure. Ad anim
            enim anim ex nostrud mollit dolore. Sunt aliqua ipsum incididunt
            adipisicing veniam minim nostrud quis quis duis magna.
          </p>
          <div className="social">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
