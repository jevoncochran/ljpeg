import React from "react";
import "./Home.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import signature from "../../assets/images/home/l-signature.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-text-div">
        <p className="intro-title">Hi, I'm L.</p>
        <p className="intro-p">
          Compton-born, Chicago-based Photographer and Creative
        </p>
      </div>

      <img className="intro-signature" src={signature} alt="L's signature" />
      <div className="intro-social-links-div">
        <a
          className="intro-social-link"
          href="https://www.facebook.com/AceMawdo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="intro-social-icon">
            <FaFacebookF />
          </div>
        </a>
        <a
          className="intro-social-link"
          href="https://www.instagram.com/_l.jpeg/f"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="intro-social-icon">
            <FaInstagram />
          </div>
        </a>
        <a
          className="intro-social-link"
          href="https://twitter.com/blackndyker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="intro-social-icon">
            <FaTwitter />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Intro;