import React from "react";
import "./Home.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-text-div">
        <p className="intro-title">Peace world, I'm L.</p>
        <p className="intro-p">
          I’m an up-and-coming photographer. I picked up a camera for the same
          reason anybody else might… I wanted to show others what I see.
        </p>
        <p className="intro-p">
          Feel free to take a look. Just keep in mind that ima artist, and i’m
          sensitive about my shit!
        </p>
      </div>
      <div className="intro-social-links-div">
        <a
          className="intro-social-link"
          href="https://www.facebook.com/LJPEG-112130923832274"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="intro-social-icon">
            <FaFacebookF />
          </div>
        </a>
        <a
          className="intro-social-link"
          href="https://www.instagram.com/_l.jpeg/"
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
