import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-pages-div">
        <Link to="/" className="nav-page">
          Home
        </Link>

        <Link to="/faces" className="nav-page">
          Faces
        </Link>
        <Link to="/places" className="nav-page">
          Places
        </Link>
        <Link to="/events" className="nav-page">
          Events
        </Link>
        <Link to="/street" className="nav-page">
          Street
        </Link>
      </div>
    </div>
  );
};

export default Nav;
