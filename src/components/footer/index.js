import React from "react";
import FacebookLogo from "../assets/facebook-logo.svg";
import InstaLogo from "../assets/insta-logo.svg";
import TwitterLogo from "../assets/twitter-logo.svg";
import "./index.css";

const Footer = () => {
  return (
    <div>
      <div className="app-footer">
        <div className="align-logos">
          <img
            src={FacebookLogo}
            alt="FacebookLogo"
            height="30px"
            width="30px"
            style={{ margin: "5px" }}
          />
          <img
            src={InstaLogo}
            alt="FacebookLogo"
            height="30px"
            width="30px"
            style={{ margin: "5px" }}
          />
          <img
            src={TwitterLogo}
            alt="FacebookLogo"
            height="30px"
            width="30px"
            style={{ margin: "5px" }}
          />
        </div>
        <div className="footer-text1">
          FAQ Mentions légales Raison d’être lomads maker News nous rejoindre
        </div>
        <div className="footer-text2">
          Site développé par Naman, design graphique Zélie Dethorey
        </div>
      </div>
    </div>
  );
};

export default Footer;
